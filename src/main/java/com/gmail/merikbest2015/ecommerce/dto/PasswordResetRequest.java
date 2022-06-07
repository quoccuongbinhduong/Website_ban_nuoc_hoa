package com.gmail.merikbest2015.ecommerce.dto;

import lombok.Data;

import javax.validation.constraints.Size;

@Data
public class PasswordResetRequest {

    private String email;

    @Size(min = 6, max = 16, message = "Mật khẩu phải dài từ 6 đến 16 ký tự")
    private String password;

    @Size(min = 6, max = 16, message = "\n" + "Xác nhận mật khẩu phải dài từ 6 đến 16 ký tự")
    private String password2;
}
