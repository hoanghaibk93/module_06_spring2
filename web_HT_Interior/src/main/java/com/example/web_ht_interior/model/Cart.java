package com.example.web_ht_interior.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cart")
    private Integer idCart;
    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "date_create")
    private LocalDate dateCreate;
    @Column(name = "status_cart")
    private Boolean statusCart;
    @ManyToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    public Cart() {
    }

    public Cart(Integer idCart, Integer quantity, LocalDate dateCreate, Boolean statusCart, Customer customer, Product product) {
        this.idCart = idCart;
        this.quantity = quantity;
        this.dateCreate = dateCreate;
        this.statusCart = statusCart;
        this.customer = customer;
        this.product = product;
    }

    public Integer getIdCart() {
        return idCart;
    }

    public void setIdCart(Integer idCart) {
        this.idCart = idCart;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LocalDate getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(LocalDate dateCreate) {
        this.dateCreate = dateCreate;
    }

    public Boolean getStatusCart() {
        return statusCart;
    }

    public void setStatusCart(Boolean statusCart) {
        this.statusCart = statusCart;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
