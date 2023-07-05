package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.model.Product;
import com.example.web_ht_interior.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    IProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProduct() {
        return new ResponseEntity<>(productService.findAllByOrderByIdProductDesc(), HttpStatus.OK);
    }
    @GetMapping("/list/type")
    public ResponseEntity<List<Product>> getAllProductByType(@RequestParam(value = "product_type") Integer idProductType) {
        return new ResponseEntity<>(productService.findAllByProductType_IdProductTypeOrderByIdProductDesc(idProductType), HttpStatus.OK);
    }
    @GetMapping("/list/popular")
    public ResponseEntity<List<Product>> getAllProductPopular() {
        return new ResponseEntity<>(productService.findAllProductPopular(), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<?> getAllProducts(@PageableDefault(size = 6) Pageable pageable,
                                            @RequestParam(defaultValue = "0") Integer page,
                                            @RequestParam(value = "sort", defaultValue = "idProduct") String sort,
                                            @RequestParam(value = "product_type", defaultValue = "0") Integer idProductType,
                                            @RequestParam(value = "room_type", defaultValue = "0") Integer idRoomType) {
        pageable = PageRequest.of(page, 6, Sort.by(sort));
        Page<Product> products;
        if (idProductType == 0 || idRoomType == 0) {
            products = productService.findProductSorted(pageable);
            System.out.println("1");
        } else if (idProductType != 0) {
            products = productService.findProductsByTypeProduct(idProductType, pageable);
            System.out.println("2");
        } else {
            products = productService.findProductsByRoomType(idRoomType, pageable);
            System.out.println("3");
        }
        if (products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);

    }
    @GetMapping("list/price")
    public ResponseEntity<List<Product>> findAllProductByPrice(){
        return new ResponseEntity<>(productService.findAllProductByPrice(),HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProductsByType(@PageableDefault(size = 6) Pageable pageable,
                                                  @RequestParam(defaultValue = "0") Integer page,
                                                  @RequestParam(value = "sort", defaultValue = "idProduct") String sort,
                                                  @RequestParam(value = "product_type", defaultValue = "0") Integer idProductType,
                                                  @RequestParam(value = "room_type", defaultValue = "0") Integer idRoomType,
                                                  @RequestParam(defaultValue = "",value = "name") String name){
        Page<Product> products = productService.findAllByRoomType_IdRoomTypeAndProductType_IdProductTypeAndNameProductContaining(idRoomType, idProductType, name, pageable);
       if(sort.equals("originalPrice")){
           pageable = PageRequest.of(page,6,Sort.by(sort).ascending());
       } else {
           pageable = PageRequest.of(page, 6, Sort.by(sort).descending());
       }
        if(idRoomType == 0 && idProductType ==0){
            return new ResponseEntity<>(productService.findAllProductByPage(pageable),HttpStatus.OK);
        } else if(idProductType == 0 && idRoomType != 0){
            return new ResponseEntity<>(productService.findProductsByRoomType(idRoomType, pageable),HttpStatus.OK);
        } else if (idProductType != 0 && idRoomType == 0) {
            return new ResponseEntity<>(productService.findProductsByTypeProduct(idProductType,pageable),HttpStatus.OK);
        }

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> getAllProductByName(@PageableDefault(value = 1) Pageable pageable, @RequestParam(value = "page", defaultValue = "0") int page, @RequestParam(required = false,defaultValue = "",value = "name") String name) {
        pageable = PageRequest.of(page, 3);
        Page<Product> products = productService.findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(name, pageable);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Integer id){
        return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
    }
}
