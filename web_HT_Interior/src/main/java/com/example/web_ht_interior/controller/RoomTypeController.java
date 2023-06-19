package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.model.RoomType;
import com.example.web_ht_interior.repository.IRoomTypeRepository;
import com.example.web_ht_interior.service.IRoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/room_type")
@CrossOrigin("*")
public class RoomTypeController {
    @Autowired
    private IRoomTypeService roomTypeService;
    @GetMapping
    public ResponseEntity<List<RoomType>> GetAllRoomType(){
        return new ResponseEntity<>(roomTypeService.findAllRoomType(), HttpStatus.OK);
    }
}
