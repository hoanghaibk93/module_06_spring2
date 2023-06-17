package com.example.web_ht_interior.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_employee")
    private Integer idEmployee;
    @Column(name = "name_employee")
    private String nameEmployee;

    @Column(name="date_of_birth")
    private LocalDate dateOfBirth;
    @Column(name="gender")
    private String gender;
    @Column(name="id_card")
    private String idCard;
    @Column(name="phone_number")
    private String phoneNumber;
    @Column(name="email")
    private String email;
    @Column(name="address")
    private String address;
    @Column(name="salary")
    private Double salary;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_user")
    private AppUser appUser;

    public Employee() {
    }

    public Employee(Integer idEmployee, String nameEmployee, LocalDate dateOfBirth, String gender, String idCard, String phoneNumber, String email, String address, Double salary, AppUser appUser) {
        this.idEmployee = idEmployee;
        this.nameEmployee = nameEmployee;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.idCard = idCard;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.salary = salary;
        this.appUser = appUser;
    }

    public Integer getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Integer idEmployee) {
        this.idEmployee = idEmployee;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
