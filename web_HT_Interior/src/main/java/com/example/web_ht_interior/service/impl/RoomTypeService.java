package com.example.web_ht_interior.service.impl;

import com.example.web_ht_interior.model.RoomType;
import com.example.web_ht_interior.repository.IRoomTypeRepository;
import com.example.web_ht_interior.service.IRoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomTypeService implements IRoomTypeService {
    @Autowired
    private IRoomTypeRepository roomTypeRepository;
    @Override
    public List<RoomType> findAllRoomType() {
        return roomTypeRepository.findAll();
    }
}
