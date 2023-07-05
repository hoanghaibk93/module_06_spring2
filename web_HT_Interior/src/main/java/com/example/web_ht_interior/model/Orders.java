package com.example.web_ht_interior.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private Integer idOrder;

    @JoinColumn(name = "total_payment")
    private Double totalPayment;
    @Column(name = "booking_date")
    private LocalDate bookingDate;
    @Column(name="status_payment")
    private Boolean statusPayment;
    @Column(name="address_shipping")
    private String addressShipping;
    @Column(name="name_receiver")
    private String nameReceiver;
    @Column(name="phone_number")
    private String phoneNumber;
    @Column(name="note")
    private String note;
    @ManyToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;

    public Orders() {
    }

    public Orders(Double totalPayment, LocalDate bookingDate, Boolean statusPayment, String addressShipping, String nameReceiver, String phoneNumber, String note, Customer customer) {
        this.totalPayment = totalPayment;
        this.bookingDate = bookingDate;
        this.statusPayment = statusPayment;
        this.addressShipping = addressShipping;
        this.nameReceiver = nameReceiver;
        this.phoneNumber = phoneNumber;
        this.note = note;
        this.customer = customer;
    }

    public Orders(Integer idOrder, Double totalPayment, LocalDate bookingDate, Boolean statusPayment, String addressShipping, String nameReceiver, String phoneNumber, String note, Customer customer) {
        this.idOrder = idOrder;
        this.totalPayment = totalPayment;
        this.bookingDate = bookingDate;
        this.statusPayment = statusPayment;
        this.addressShipping = addressShipping;
        this.nameReceiver = nameReceiver;
        this.phoneNumber = phoneNumber;
        this.note = note;
        this.customer = customer;
    }

    public Integer getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Integer idOrder) {
        this.idOrder = idOrder;
    }

    public Double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(Double totalPayment) {
        this.totalPayment = totalPayment;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Boolean getStatusPayment() {
        return statusPayment;
    }

    public void setStatusPayment(Boolean statusPayment) {
        this.statusPayment = statusPayment;
    }

    public String getAddressShipping() {
        return addressShipping;
    }

    public void setAddressShipping(String addressShipping) {
        this.addressShipping = addressShipping;
    }

    public String getNameReceiver() {
        return nameReceiver;
    }

    public void setNameReceiver(String nameReceiver) {
        this.nameReceiver = nameReceiver;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
