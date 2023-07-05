package com.example.web_ht_interior.dto;

import com.example.web_ht_interior.model.Customer;

import java.util.ArrayList;
import java.util.List;

public class PaymentForm {
    private Customer customer;
    private String phoneNumberShipping;
    private String addressShipping;
    private String name;
    private String note;
    private Double priceTotal;
    private String email;
    private List<Integer> listCartId = new ArrayList<>();

    public PaymentForm() {
    }

    public PaymentForm(Customer customer, String phoneNumberShipping, String addressShipping, String name, String note, Double priceTotal, String email, List<Integer> listCartId) {
        this.customer = customer;
        this.phoneNumberShipping = phoneNumberShipping;
        this.addressShipping = addressShipping;
        this.name = name;
        this.note = note;
        this.priceTotal = priceTotal;
        this.email = email;
        this.listCartId = listCartId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getPhoneNumberShipping() {
        return phoneNumberShipping;
    }

    public void setPhoneNumberShipping(String phoneNumberShipping) {
        this.phoneNumberShipping = phoneNumberShipping;
    }

    public String getAddressShipping() {
        return addressShipping;
    }

    public void setAddressShipping(String addressShipping) {
        this.addressShipping = addressShipping;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Double getPriceTotal() {
        return priceTotal;
    }

    public void setPriceTotal(Double priceTotal) {
        this.priceTotal = priceTotal;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Integer> getListCartId() {
        return listCartId;
    }

    public void setListCartId(List<Integer> listCartId) {
        this.listCartId = listCartId;
    }
}
