package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.dto.CartDTO;
import com.example.web_ht_interior.dto.PaymentForm;
import com.example.web_ht_interior.model.*;
import com.example.web_ht_interior.security.jwt.JwtProvider;
import com.example.web_ht_interior.security.jwt.JwtTokenFilter;
import com.example.web_ht_interior.security.response.ResponseMessage;
import com.example.web_ht_interior.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IProductService productService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IOrdersService ordersService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;

    @GetMapping("list/cart")
    public ResponseEntity<?> findAllCart(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String userName = jwtProvider.getUserNameFromToken(token);
        return new ResponseEntity<>(cartService.findAllByCustomer_AppUser_NameUser(userName),HttpStatus.OK);
    }

    @PostMapping("add/cart")
    public ResponseEntity<?> createCart(HttpServletRequest request, @RequestBody CartDTO cartDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String userName = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findCustomerByAppUser_NameUser(userName);
        LocalDate localDate = LocalDate.now();
        Product product = productService.findProductById(cartDTO.getProduct().getIdProduct());
        Boolean exist = cartService.existsCartByCustomer_IdCustomerAndProduct_IdProduct(customer.getIdCustomer(), product.getIdProduct());
        if (exist) {
            Cart cartOld = cartService.findCartByCustomer_IdCustomerAndProduct_IdProduct(customer.getIdCustomer(), product.getIdProduct());
            if((cartDTO.getQuantity() + cartOld.getQuantity())>product.getQuantity()){
                return new ResponseEntity<>(new ResponseMessage("Số lượng trong kho đã hết, vui lòng chọn sản phẩm khác"), HttpStatus.BAD_REQUEST);
            }
            Integer newQuantity = cartDTO.getQuantity() + cartOld.getQuantity();
            cartOld.setQuantity(newQuantity);
            cartService.saveCart(cartOld);
            return new ResponseEntity<>(new ResponseMessage("Cập nhật sản phẩm vào giỏ hàng thành công"), HttpStatus.CREATED);
        } else {
            if(product.getQuantity()<=0){
                return new ResponseEntity<>(new ResponseMessage("Số lượng trong kho đã hết, vui lòng chọn sản phẩm khác"), HttpStatus.BAD_REQUEST);
            }
            Cart cartNew = new Cart();
            cartNew.setCustomer(customer);
            cartNew.setStatusCart(true);
            cartNew.setProduct(product);
            cartNew.setQuantity(cartDTO.getQuantity());
            cartNew.setDateCreate(localDate);
            cartService.saveCart(cartNew);
            return new ResponseEntity<>(new ResponseMessage("Thêm mới sản phẩm vào giỏ hàng thành công"),HttpStatus.CREATED);
        }
    }
    @DeleteMapping("delete/cart/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer id){
        cartService.deleteCart(id);
        return new ResponseEntity<>(new ResponseMessage("Xóa sản phẩm trong giỏ hàng thành công"), HttpStatus.OK);
    }

    @GetMapping("cart/{id}")
    public ResponseEntity<?> findCartById(@PathVariable Integer id){
        return new ResponseEntity<>(cartService.findByIdCart(id),HttpStatus.OK);
    }
    @PutMapping("cart/update")
    public ResponseEntity<?> updateCart(@RequestBody Cart cart){
        Cart cartOld = cartService.findByIdCart(cart.getIdCart());
        cartOld.setQuantity(cart.getQuantity());
        cartService.saveCart(cartOld);
        return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"),HttpStatus.OK);
    }

  @PostMapping("/cart/payment")
    public ResponseEntity<?> payment(HttpServletRequest request, @RequestBody PaymentForm paymentForm){
      String token = jwtTokenFilter.getJwt(request);
      String userName = jwtProvider.getUserNameFromToken(token);
      Customer customer = customerService.findCustomerByAppUser_NameUser(userName);
        for(Integer cartID : paymentForm.getListCartId()){
          Cart cart = cartService.findByIdCart(cartID);
          if(cart.getQuantity()>cart.getProduct().getQuantity()){
              return new ResponseEntity<>(new ResponseMessage("Số lượng trong kho chỉ còn " + cart.getProduct().getQuantity()),HttpStatus.BAD_REQUEST);
          }
      }
      LocalDate localDate = LocalDate.now();
      Orders orders = new Orders();
      orders.setCustomer(customer);
      orders.setBookingDate(localDate);
      orders.setStatusPayment(true);
      orders.setTotalPayment(paymentForm.getPriceTotal());
      orders.setNameReceiver(paymentForm.getName());
      orders.setPhoneNumber(paymentForm.getPhoneNumberShipping());
      orders.setAddressShipping(paymentForm.getAddressShipping());
      orders.setNote(paymentForm.getNote());
      ordersService.createOrders(orders);
      for(Integer cartID : paymentForm.getListCartId()){
          Cart cart = cartService.findByIdCart(cartID);
          OrderDetail orderDetail = new OrderDetail();
          orderDetail.setProduct(cart.getProduct());
          orderDetail.setQuantityOrder(cart.getQuantity());
          orderDetail.setOrders(ordersService.findById(orders.getIdOrder()));
          Product product = cart.getProduct();
          product.setQuantity(product.getQuantity()-cart.getQuantity());
          productService.updateProduct(product);
          orderDetailService.create(orderDetail);
          cartService.deleteCart(cartID);
      }

      return new ResponseEntity<>(new ResponseMessage("Thanh toán thành công"),HttpStatus.CREATED);
  }
}


















