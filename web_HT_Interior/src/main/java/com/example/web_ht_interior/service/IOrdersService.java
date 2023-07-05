package com.example.web_ht_interior.service;

import com.example.web_ht_interior.dto.EmailDTO;
import com.example.web_ht_interior.model.Orders;
import com.example.web_ht_interior.service.impl.OrdersService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrdersService {
    void createOrders(Orders orders);
    Orders findById(Integer id);
    void sendEmail(EmailDTO emailDTO);
    Page<Orders> findAllByCustomer_AppUser_NameUserOrderByIdOrderDesc(String nameUser, Pageable pageable);
}
