package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByOrderByIdProductDesc();
    List<Product> findAllByProductType_IdProductTypeOrderByIdProductDesc(Integer idProductType);
    Page<Product> findAllByNameProductContainingOrBrandContainingOrColorContainingOrCountryOfOriginContaining(String name, String brand, String color, String country, Pageable pageable);

    Page<Product> findAllByProductType_IdProductType(Integer id, Pageable pageable);

    Page<Product> findAllByRoomType_IdRoomType(Integer id, Pageable pageable);

    Page<Product> findAllByRoomType_IdRoomTypeAndProductType_IdProductTypeAndNameProductContaining(Integer idRoomType, Integer idProductType, String name, Pageable pageable);

    @Query(value = "select * from product where original_price > sale_price order by id_product desc", nativeQuery = true)
    List<Product> findAllProductByPrice();

   @Query(value = "SELECT pr.*\n" +
           "FROM product pr\n" +
           "JOIN (\n" +
           "  SELECT id_product, SUM(quantity_order) AS total_quantity_order\n" +
           "  FROM order_detail\n" +
           "  GROUP BY id_product\n" +
           ") order_totals\n" +
           "ON order_totals.id_product = pr.id_product\n" +
           "ORDER BY order_totals.total_quantity_order DESC;", nativeQuery = true)
    List<Product> findAllProductPopular();
}
