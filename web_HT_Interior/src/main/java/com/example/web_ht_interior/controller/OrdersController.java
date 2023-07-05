package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.model.Orders;
import com.example.web_ht_interior.security.jwt.JwtProvider;
import com.example.web_ht_interior.security.jwt.JwtTokenFilter;
import com.example.web_ht_interior.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private IOrdersService ordersService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;

    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrderByCustomer(HttpServletRequest request, @PageableDefault(size = 6) Pageable pageable){
        String token = jwtTokenFilter.getJwt(request);
        String userName = jwtProvider.getUserNameFromToken(token);
//        pageable = PageRequest.of(page,3);
        return new ResponseEntity<>(ordersService.findAllByCustomer_AppUser_NameUserOrderByIdOrderDesc(userName, pageable), HttpStatus.OK);
    }
}
