package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.AppUser;
import com.example.web_ht_interior.repository.IAppRoleRepository;
import com.example.web_ht_interior.repository.IAppUserRepository;
import com.example.web_ht_interior.service.IAppRoleService;
import com.example.web_ht_interior.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;
    @Override
    public AppUser findAppUserByNameUser(String nameUser) {
        return appUserRepository.findAppUserByNameUser(nameUser);
    }

    @Override
    public Boolean existsByNameUser(String nameUser) {
        return appUserRepository.existsByNameUser(nameUser);
    }

    @Override
    public AppUser saveAppUser(AppUser appUser) {
        return appUserRepository.save(appUser);
    }
}
