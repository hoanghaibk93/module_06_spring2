package com.example.web_ht_interior.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Integer idProduct;
    @Column(name = "name_product")
    private String nameProduct;
    @Column(name ="brand")
    private String brand;
    @Column(name = "color")
    private String color;
    @Column(name = "material")
    private String material;
    @Column(name = "size")
    private String size;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name ="country_of_origin")
    private String countryOfOrigin;
    @Column(name="introduce")
    private String introduce;
    @Column(name = "description")
    private String description;
    @Column(name ="image")
    private String image;
    @Column(name = "original_price")
    private Double originalPrice;
    @Column(name="sale_price")
    private Double salePrice;
    @ManyToOne
    @JoinColumn(name="id_product_type")
    private ProductType productType;
    @ManyToOne
    @JoinColumn(name="id_room_type")
    private RoomType roomType;

    public Product() {
    }

    public Product(Integer idProduct, String nameProduct, String brand, String color, String material, String size, Integer quantity, String countryOfOrigin, String introduce, String description, String image, Double originalPrice, Double salePrice, ProductType productType, RoomType roomType) {
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.size = size;
        this.quantity = quantity;
        this.countryOfOrigin = countryOfOrigin;
        this.introduce = introduce;
        this.description = description;
        this.image = image;
        this.originalPrice = originalPrice;
        this.salePrice = salePrice;
        this.productType = productType;
        this.roomType = roomType;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCountryOfOrigin() {
        return countryOfOrigin;
    }

    public void setCountryOfOrigin(String countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(Double originalPrice) {
        this.originalPrice = originalPrice;
    }

    public Double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(Double salePrice) {
        this.salePrice = salePrice;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }
}
