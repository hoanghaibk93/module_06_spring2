package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.Cart;
import com.example.web_ht_interior.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart,Integer> {
   Boolean existsCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct);
   Cart findCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct);
   List<Cart> findAllByCustomer_AppUser_NameUser(String nameUser);

}
