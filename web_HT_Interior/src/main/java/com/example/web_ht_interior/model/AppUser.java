package com.example.web_ht_interior.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "app_user", uniqueConstraints = {@UniqueConstraint(columnNames = {"name_user"})})
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer idUser;
    @Column(name = "name_user")
    private String nameUser;

    @Column(name="encryted_password")
    private String password;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "id_user"),
    inverseJoinColumns = @JoinColumn(name = "id_role"))
    Set<AppRole> appRoles = new HashSet<>();

    public AppUser() {
    }

    public AppUser(Integer idUser, String nameUser, String password, Set<AppRole> appRoles) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.password = password;
        this.appRoles = appRoles;
    }

    public AppUser(String username, String encode) {
        this.nameUser = username;
        this.password = encode;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<AppRole> getAppRoles() {
        return appRoles;
    }

    public void setAppRoles(Set<AppRole> appRoles) {
        this.appRoles = appRoles;
    }
}
