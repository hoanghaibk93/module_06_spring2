package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.model.ProductType;
import com.example.web_ht_interior.model.RoomType;
import com.example.web_ht_interior.service.IProductTypeService;
import com.example.web_ht_interior.service.IRoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product_type")
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;
    @GetMapping
    public ResponseEntity<List<ProductType>> GetAllProductType(){
        return new ResponseEntity<>(productTypeService.findAllListProductType(), HttpStatus.OK);
    }
}
