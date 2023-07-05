package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.dto.IOrderDetailDTO;
import com.example.web_ht_interior.dto.OrderDetailDTO;
import com.example.web_ht_interior.model.OrderDetail;
import com.example.web_ht_interior.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
    @Query(value = "select pr.name_product as nameProduct , pr.image as image, pr.sale_price as salePrice, od.quantity_order as quantityOrder, od.id_order as idOrder, pr.id_product as idProduct from product pr\n" +
            "inner join order_detail od on od.id_product = pr.id_product\n" +
            "inner join orders ors on od.id_order = ors.id_order\n" +
            "where od.id_order = :id", nativeQuery = true)
    List<IOrderDetailDTO> findAllOrderDetailByIdOrder(@Param("id") Integer id);
}

