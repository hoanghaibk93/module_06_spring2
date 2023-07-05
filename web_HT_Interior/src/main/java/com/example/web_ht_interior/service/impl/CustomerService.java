package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.Customer;
import com.example.web_ht_interior.repository.ICustomerRepository;
import com.example.web_ht_interior.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
        @Autowired
        private ICustomerRepository customerRepository;
    @Override
    public Customer findCustomerByAppUser_NameUser(String nameUser) {
        return customerRepository.findCustomerByAppUser_NameUser(nameUser);
    }
}
