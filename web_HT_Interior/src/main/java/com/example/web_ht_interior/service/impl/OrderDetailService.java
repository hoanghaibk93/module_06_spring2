package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.dto.IOrderDetailDTO;
import com.example.web_ht_interior.dto.OrderDetailDTO;
import com.example.web_ht_interior.model.OrderDetail;
import com.example.web_ht_interior.repository.IOrderDetailRepository;
import com.example.web_ht_interior.service.IOrderDetailService;
import com.example.web_ht_interior.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void create(OrderDetail orderDetail) {
        orderDetailRepository.save(orderDetail);
    }

    @Override
    public List<IOrderDetailDTO> findAllOrderDetailByIdOrder(Integer id) {
        return orderDetailRepository.findAllOrderDetailByIdOrder(id);
    }
}
