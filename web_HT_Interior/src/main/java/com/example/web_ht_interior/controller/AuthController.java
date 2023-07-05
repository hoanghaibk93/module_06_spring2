package com.example.web_ht_interior.controller;

import com.example.web_ht_interior.model.AppRole;
import com.example.web_ht_interior.model.AppUser;
import com.example.web_ht_interior.security.jwt.JwtProvider;
import com.example.web_ht_interior.security.request.SignInForm;
import com.example.web_ht_interior.security.request.SignUpForm;
import com.example.web_ht_interior.security.response.ErrorMessage;
import com.example.web_ht_interior.security.response.JwtResponse;
import com.example.web_ht_interior.security.response.ResponseMessage;
import com.example.web_ht_interior.security.userPrinciple.UserPrinciple;
import com.example.web_ht_interior.service.IAppRoleService;
import com.example.web_ht_interior.service.IAppUserService;
import com.example.web_ht_interior.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/public")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    IAppUserService appUserService;
    @Autowired
    IAppRoleService appRoleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    ICustomerService customerService;

//     Phương thức sử dụng để đăng ký account dựa trên đầu vào là username và password
//     Kết quả trả về là 1 object bao gồm: message thành công khi lưu thành công hoặc bại khi lưu thất bại

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUpForm signUpForm) {
        if (appUserService.existsByNameUser(signUpForm.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("The username existed !!, Try again"), HttpStatus.OK);
        }
        AppUser users = new AppUser(signUpForm.getUsername(), passwordEncoder.encode(signUpForm.getPassword()));
        Set<String> strRoles = signUpForm.getRoles();
        Set<AppRole> appRoles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    AppRole adminRole = appRoleService.findAppRoleByNameRole("ADMIN");
                    appRoles.add(adminRole);
                    break;
                default:
                    AppRole userRole = appRoleService.findAppRoleByNameRole("USER");
                    appRoles.add(userRole);
            }
        });
        users.setAppRoles(appRoles);
        System.out.println(users);
        AppUser appUser = appUserService.saveAppUser(users);
        if (appUser != null) {
            return new ResponseEntity<>(new ResponseMessage("Create user success!!!"), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ResponseMessage("Create user failed!!!"), HttpStatus.BAD_REQUEST);
    }

//     Phương thức sử dụng để đăng nhập dựa trên đầu vào là username và password
//     Kết quả trả về là 1 object bao gồm: token được tạo có hiệu lực 30 phút, tên người dùng và quyền truy cập

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ErrorMessage> errorMessages = new ArrayList<>();
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMessages.add(new ErrorMessage(f.getField(), f.getDefaultMessage())));
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities()), HttpStatus.OK);
    }
}
