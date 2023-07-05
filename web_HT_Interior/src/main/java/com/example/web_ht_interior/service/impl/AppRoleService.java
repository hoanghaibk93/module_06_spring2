package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.AppRole;
import com.example.web_ht_interior.repository.IAppRoleRepository;
import com.example.web_ht_interior.service.IAppRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppRoleService implements IAppRoleService {
    @Autowired
    private IAppRoleRepository appRoleRepository;
    @Override
    public AppRole findAppRoleByNameRole(String nameRole) {
        return appRoleRepository.findAppRoleByNameRole(nameRole);
    }
}
