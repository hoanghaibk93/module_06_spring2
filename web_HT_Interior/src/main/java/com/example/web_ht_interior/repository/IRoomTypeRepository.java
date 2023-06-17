package com.example.web_ht_interior.repository;

import com.example.web_ht_interior.model.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoomTypeRepository extends JpaRepository<RoomType, Integer> {
}
