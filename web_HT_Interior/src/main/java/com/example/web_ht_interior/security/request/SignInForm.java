package com.example.web_ht_interior.security.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignInForm {
    @NotBlank(message = "Tên đăng nhập không được để trống")
    @Size(min = 8, max = 35, message = "Tên đăng nhập chỉ từ 8 đến 35 ký tự")
    private String username;
    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, max = 35, message = "Mật khẩu chỉ từ 8 đến 35 ký tự")
    private String password;

    public SignInForm() {
    }

    public SignInForm(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
