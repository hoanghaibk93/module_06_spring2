package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping
    public ResponseEntity<?> findCustomerByUserName(@RequestParam String username){
        return new ResponseEntity<>(customerService.findCustomerByAppUser_NameUser(username), HttpStatus.OK);
    }

}