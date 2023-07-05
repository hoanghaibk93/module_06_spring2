package com.example.web_ht_interior.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DemoController {
    @GetMapping("/public/demo1")
    public String demo1(){
        return "Hi C1122G1";
    }
    @GetMapping("/user/demo2")
    public String demo2(){
        return "Hi C1122G1, role user";
    }
    @GetMapping("/admin/demo3")
    public String demo3(){
        return "Hi C1122G1, role admin";
    }
}
