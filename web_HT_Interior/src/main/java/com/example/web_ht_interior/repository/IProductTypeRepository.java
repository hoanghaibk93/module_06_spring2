package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
}
