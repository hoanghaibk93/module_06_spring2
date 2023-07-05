package com.example.web_ht_interior.service;

import com.example.web_ht_interior.model.Customer;

public interface ICustomerService {
    Customer findCustomerByAppUser_NameUser(String nameUser);
}
