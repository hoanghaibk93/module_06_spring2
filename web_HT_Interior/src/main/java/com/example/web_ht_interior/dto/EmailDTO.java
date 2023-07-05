package com.example.web_ht_interior.dto;

public class EmailDTO {
    private String phoneNumberShipping;
    private String addressShipping;
    private String nameCustomer;
    private String nameReceiver;
    private String note;
    private Double priceTotal;
    private String email;
    private String Option;

    public EmailDTO() {
    }

    public EmailDTO(String phoneNumberShipping, String addressShipping, String nameCustomer, String nameReceiver, String note, Double priceTotal) {
        this.phoneNumberShipping = phoneNumberShipping;
        this.addressShipping = addressShipping;
        this.nameCustomer = nameCustomer;
        this.nameReceiver = nameReceiver;
        this.note = note;
        this.priceTotal = priceTotal;
    }

    public EmailDTO(String phoneNumberShipping, String addressShipping, String nameCustomer, String nameReceiver, String note, Double priceTotal, String email, String option) {
        this.phoneNumberShipping = phoneNumberShipping;
        this.addressShipping = addressShipping;
        this.nameCustomer = nameCustomer;
        this.nameReceiver = nameReceiver;
        this.note = note;
        this.priceTotal = priceTotal;
        this.email = email;
        Option = option;
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

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getNameReceiver() {
        return nameReceiver;
    }

    public void setNameReceiver(String nameReceiver) {
        this.nameReceiver = nameReceiver;
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

    public String getOption() {
        return Option;
    }

    public void setOption(String option) {
        Option = option;
    }
}
