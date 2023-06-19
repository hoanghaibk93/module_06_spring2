package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.Product;
import com.example.web_ht_interior.repository.IProductRepository;
import com.example.web_ht_interior.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

//    @Override
//    public Page<Product> findAllProduct(String search, Pageable pageable) {
//        return productRepository.findAll(search,pageable);
//    }

    @Override
    public Page<Product> findProductsByTypeProduct(Integer id, Pageable pageable) {
        return productRepository.findAllByProductType_IdProductType(id, pageable);
    }

    @Override
    public Page<Product> findProductsByRoomType(Integer id, Pageable pageable) {
        return productRepository.findAllByRoomType_IdRoomType(id, pageable);
    }

    @Override
    public Page<Product> findProductSorted(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Page<Product> findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(String name, Pageable pageable) {
        return productRepository.findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(name,name, name,name,pageable);
    }

    @Override
    public Page<Product> findAllByRoomType_IdRoomTypeAndProductType_IdProductTyp(Integer idProductType, Integer idRoomType, Pageable pageable) {
        return productRepository.findAllByRoomType_IdRoomTypeAndProductType_IdProductType(idProductType, idRoomType, pageable);
    }

    @Override
    public Page<Product> findAllProductByPage(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
}
