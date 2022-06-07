package com.gmail.merikbest2015.ecommerce.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class RegistrationRequest {

    @NotBlank(message = "Xác thực.")
    private String captcha;

    @NotBlank(message = "Tên không được để rỗng")
    private String firstName;

    @NotBlank(message = "Họ không được để rỗng")
    private String lastName;

    @Size(min = 6, max = 16, message = "Mật khẩu phải dài từ 6 đến 16 ký tự")
    private String password;

    @Size(min = 6, max = 16, message = "Xác nhận mật khẩu phải dài từ 6 đến 16 ký tự")
    private String password2;

    @Email(message = "Email không chính xác")
    @NotBlank(message = "Email không được để trống")
    private String email;
}
