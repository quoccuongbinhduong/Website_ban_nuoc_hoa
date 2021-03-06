package com.gmail.merikbest2015.ecommerce.dto.user;

import com.gmail.merikbest2015.ecommerce.domain.Role;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Set;

@Data
public class UserRequest {

    @NotBlank(message = "Tên không được để trống")
    private String firstName;

    @NotBlank(message = "Họ không được để trống")
    private String lastName;

    private String email;
    private String city;
    private String address;
    private String phoneNumber;
    private String postIndex;
    private String provider;
    private boolean active;
    private String activationCode;
    private String passwordResetCode;
    private Set<Role> roles;
}
