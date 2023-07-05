package com.example.web_ht_interior.dto;

public class OrderDetailDTO {
    private String nameProduct;
    private String image;
    private Double salePrice;
    private Integer quantityOrder;
    private Integer idOrder;

    public OrderDetailDTO() {
    }

    public OrderDetailDTO(String nameProduct, String image, Double salePrice, Integer quantityOrder, Integer idOrder) {
        this.nameProduct = nameProduct;
        this.image = image;
        this.salePrice = salePrice;
        this.quantityOrder = quantityOrder;
        this.idOrder = idOrder;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(Double salePrice) {
        this.salePrice = salePrice;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public Integer getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Integer idOrder) {
        this.idOrder = idOrder;
    }
}
