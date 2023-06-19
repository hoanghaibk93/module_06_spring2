package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.ProductType;
import com.example.web_ht_interior.repository.IProductTypeRepository;
import com.example.web_ht_interior.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductType> findAllListProductType() {
        return productTypeRepository.findAll();
    }
}
