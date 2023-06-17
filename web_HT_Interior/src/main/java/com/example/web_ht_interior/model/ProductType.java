package com.example.web_ht_interior.model;

import javax.persistence.*;

@Entity
@Table(name = "product_type")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product_type")
    private Integer idProductType;

    @Column(name = "name_product_type")
    private String nameProductType;


    public ProductType() {
    }

    public ProductType(Integer idProductType, String nameProductType) {
        this.idProductType = idProductType;
        this.nameProductType = nameProductType;
    }

    public Integer getIdProductType() {
        return idProductType;
    }

    public void setIdProductType(Integer idProductType) {
        this.idProductType = idProductType;
    }

    public String getNameProductType() {
        return nameProductType;
    }

    public void setNameProductType(String nameProductType) {
        this.nameProductType = nameProductType;
    }
}
