package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.Product;
import com.example.web_ht_interior.repository.IProductRepository;
import com.example.web_ht_interior.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> findAllProduct() {
        return productRepository.findAll();
    }
}
