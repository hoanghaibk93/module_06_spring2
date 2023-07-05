package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.dto.EmailDTO;
import com.example.web_ht_interior.dto.RequestPayment;
import com.example.web_ht_interior.service.ICartService;
import com.example.web_ht_interior.service.impl.CartService;
import com.example.web_ht_interior.service.impl.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class PaymentController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private OrdersService ordersService;
 @PostMapping("/payment")
    public ResponseEntity<?> createPayment(@RequestBody RequestPayment requestPayment) throws UnsupportedEncodingException {
     return new ResponseEntity<>(cartService.payment(requestPayment), HttpStatus.OK);
 }
 @PostMapping("/send_email")
    public ResponseEntity<?> sendEmail(@RequestBody EmailDTO emailDTO){
     ordersService.sendEmail(emailDTO);
     return new ResponseEntity<>(HttpStatus.OK);
 }
}
