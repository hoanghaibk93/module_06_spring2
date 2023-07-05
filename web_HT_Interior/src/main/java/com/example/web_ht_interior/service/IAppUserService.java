package com.example.web_ht_interior.service;

import com.example.web_ht_interior.model.AppUser;

public interface IAppUserService {
    AppUser findAppUserByNameUser(String nameUser);
    Boolean existsByNameUser(String nameUser);
    AppUser saveAppUser(AppUser appUser);
}
