package com.example.web_ht_interior.service;

import com.example.web_ht_interior.dto.IOrderDetailDTO;
import com.example.web_ht_interior.dto.OrderDetailDTO;
import com.example.web_ht_interior.model.OrderDetail;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailService {
    void create(OrderDetail orderDetail);
    List<IOrderDetailDTO> findAllOrderDetailByIdOrder(Integer id);
}
