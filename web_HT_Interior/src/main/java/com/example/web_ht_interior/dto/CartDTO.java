package com.example.web_ht_interior.dto;

import com.example.web_ht_interior.model.Product;

public class CartDTO {

    private Integer quantity;
    private Boolean statusCart = false;
    private Product product;

    public CartDTO() {
    }
    public CartDTO(Integer quantity, Boolean statusCart, Product product) {
        this.quantity = quantity;
        this.statusCart = statusCart;
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getStatusCart() {
        return statusCart;
    }

    public void setStatusCart(Boolean statusCart) {
        this.statusCart = statusCart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
