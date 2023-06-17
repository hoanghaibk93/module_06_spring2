package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
}
