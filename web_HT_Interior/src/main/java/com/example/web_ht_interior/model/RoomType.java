package com.example.web_ht_interior.model;

import javax.persistence.*;

@Entity
@Table(name = "room_type")
public class RoomType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_room_type")
    private Integer idRoomType;

    @Column(name="name_room_type")
    private String nameRoomType;

    public RoomType() {
    }

    public RoomType(Integer idRoomType, String nameRoomType) {
        this.idRoomType = idRoomType;
        this.nameRoomType = nameRoomType;
    }

    public Integer getIdRoomType() {
        return idRoomType;
    }

    public void setIdRoomType(Integer idRoomType) {
        this.idRoomType = idRoomType;
    }

    public String getNameRoomType() {
        return nameRoomType;
    }

    public void setNameRoomType(String nameRoomType) {
        this.nameRoomType = nameRoomType;
    }
}
