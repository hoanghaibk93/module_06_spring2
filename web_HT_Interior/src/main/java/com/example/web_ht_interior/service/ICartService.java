package com.example.web_ht_interior.service;

import com.example.web_ht_interior.dto.RequestPayment;
import com.example.web_ht_interior.dto.ResponsePayment;
import com.example.web_ht_interior.model.Cart;
import com.example.web_ht_interior.model.Customer;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface ICartService {
    List<Cart> findAllCart();
    void addCart(Cart cart);
    void saveCart(Cart cart);
    Cart findByIdCart(Integer idCart);
    void deleteCart(Integer idCart);
    Boolean existsCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct);
    Cart findCartByCustomer_IdCustomerAndProduct_IdProduct(Integer idCustomer, Integer idProduct);
    List<Cart> findAllByCustomer_AppUser_NameUser(String nameUser);
    ResponsePayment payment(RequestPayment requestPayment) throws UnsupportedEncodingException;
}
