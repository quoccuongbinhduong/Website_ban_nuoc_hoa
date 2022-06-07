package com.gmail.merikbest2015.ecommerce.dto.order;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Map;

@Data
public class OrderRequest {

    private Double totalPrice;
    private Map<Long, Long> perfumesId;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String firstName;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String lastName;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String city;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String address;

    @Email(message = "Email không chính xác")
    @NotBlank(message = "Email không được để trống")
    private String email;

    @NotBlank(message = "\n" + "Số điện thoại không được để trống")
    private String phoneNumber;

    @NotNull(message = "Mã định danh không được để trống")
    @Min(value = 5, message = "Mã định danh phải có 5 chữ số")
    private Integer postIndex;
}
