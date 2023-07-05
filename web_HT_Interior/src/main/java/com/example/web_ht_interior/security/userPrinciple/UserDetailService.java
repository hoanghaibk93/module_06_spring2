package com.example.web_ht_interior.security.userPrinciple;


import com.example.web_ht_interior.model.AppUser;
import com.example.web_ht_interior.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private IAppUserService appUserService;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            AppUser appUser = appUserService.findAppUserByNameUser(username);
            return UserPrinciple.build(appUser);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}
