package com.example.web_ht_interior.service;

import com.example.web_ht_interior.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> findAllByOrderByIdProductDesc();
//    Page<Product> findAllProduct(String search, Pageable pageable);
    Page<Product> findProductsByTypeProduct(Integer id, Pageable pageable);
    Page<Product> findProductsByRoomType(Integer id, Pageable pageable);
    Page<Product> findProductSorted(Pageable pageable);
    Page<Product> findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(String name, Pageable pageable);
    Page<Product> findAllByRoomType_IdRoomTypeAndProductType_IdProductTypeAndNameProductContaining(Integer idRoomType, Integer idProductType, String name, Pageable pageable);
    Page<Product> findAllProductByPage(Pageable pageable);
    List<Product> findAllProductByPrice();
    Product findProductById(Integer idProduct);
    List<Product> findAllByProductType_IdProductTypeOrderByIdProductDesc(Integer idProductType);

    void updateProduct(Product product);
    List<Product> findAllProductPopular();
}
