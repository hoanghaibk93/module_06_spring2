package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrdersRepository extends JpaRepository<Orders,Integer> {
Page<Orders> findAllByCustomer_AppUser_NameUserOrderByIdOrderDesc(String nameUser, Pageable pageable);
}
