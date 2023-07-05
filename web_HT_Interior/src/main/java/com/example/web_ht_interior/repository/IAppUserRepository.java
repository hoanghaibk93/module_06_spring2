package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.AppRole;
import com.example.web_ht_interior.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAppUserRepository extends JpaRepository<AppUser, Integer> {
    AppUser findAppUserByNameUser(String nameUser);
    Boolean existsByNameUser(String nameUser);
}
