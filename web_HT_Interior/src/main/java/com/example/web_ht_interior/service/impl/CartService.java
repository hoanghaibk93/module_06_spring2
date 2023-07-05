package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.config.Config;
import com.example.web_ht_interior.dto.RequestPayment;
import com.example.web_ht_interior.dto.ResponsePayment;
import com.example.web_ht_interior.model.Cart;
import com.example.web_ht_interior.repository.ICartRepository;
import com.example.web_ht_interior.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<Cart> findAllCart() {
        return cartRepository.findAll();
    }

    @Override
    public void addCart(Cart cart) {
     cartRepository.save(cart);
    }

    @Override
    public void saveCart(Cart cart) {
    cartRepository.save(cart);
    }

    @Override
    public Cart findByIdCart(Integer idCart) {
        return cartRepository.findById(idCart).get();
    }

    @Override
    public void deleteCart(Integer idCart) {
        cartRepository.deleteById(idCart);
    }

    @Override
    public Boolean existsCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct) {
        return cartRepository.existsCartByCustomer_IdCustomerAndProduct_IdProduct(idCustomer, idProduct);
    }

    @Override
    public Cart findCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct) {
        return cartRepository.findCartByCustomer_IdCustomerAndProduct_IdProduct(idCustomer,idProduct);
    }

    @Override
    public List<Cart> findAllByCustomer_AppUser_NameUser(String nameUser) {
        return cartRepository.findAllByCustomer_AppUser_NameUser(nameUser);
    }

    @Override
    public ResponsePayment payment(RequestPayment requestPayment) throws UnsupportedEncodingException {

        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = Config.getRandomNumber(8);

        String vnp_TmnCode = Config.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf((int) (requestPayment.getTotalPrice() * 100)));
//        vnp_Params.put("vnp_Amount", "1000000");
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");

        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", Config.vnp_Returnurl);
        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = Config.hmacSHA512(Config.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl;
        ResponsePayment responsePayment = new ResponsePayment();
        responsePayment.setMessage("Successfully");
        responsePayment.setStatus("Ok");
        responsePayment.setURL(paymentUrl);
        return responsePayment;
    }
}
