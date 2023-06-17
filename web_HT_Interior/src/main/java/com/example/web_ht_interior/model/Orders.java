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
    @ManyToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;

    public Orders() {
    }

    public Orders(Integer idOrder, Double totalPayment, LocalDate bookingDate, Boolean statusPayment, Customer customer) {
        this.idOrder = idOrder;
        this.totalPayment = totalPayment;
        this.bookingDate = bookingDate;
        this.statusPayment = statusPayment;
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
