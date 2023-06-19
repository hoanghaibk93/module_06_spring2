package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
Page<Product> findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(String name, String brand, String color, String country, Pageable pageable);
Page<Product> findAllByProductType_IdProductType(Integer id, Pageable pageable);
Page<Product> findAllByRoomType_IdRoomType(Integer id, Pageable pageable);

Page<Product> findAllByRoomType_IdRoomTypeAndProductType_IdProductType(Integer idRoomType, Integer idProductType, Pageable pageable);
}
