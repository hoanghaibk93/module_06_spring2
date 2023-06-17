package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAppRoleRepository extends JpaRepository<AppRole, Integer> {
}
