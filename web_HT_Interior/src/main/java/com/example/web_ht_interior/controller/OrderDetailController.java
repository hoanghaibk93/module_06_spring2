package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.dto.IOrderDetailDTO;
import com.example.web_ht_interior.dto.OrderDetailDTO;
import com.example.web_ht_interior.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;


    @GetMapping("/order_detail/order")
    public ResponseEntity<List<IOrderDetailDTO>> findAllOrderDetailByIdOrder(@RequestParam Integer id){
        return new ResponseEntity<>(orderDetailService.findAllOrderDetailByIdOrder(id), HttpStatus.OK);
    }
}
