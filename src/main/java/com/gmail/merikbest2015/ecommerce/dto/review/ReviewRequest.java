package com.gmail.merikbest2015.ecommerce.dto.review;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
public class ReviewRequest {

    private Long perfumeId;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String author;

    @NotBlank(message = "Điền vào trường đầu vào")
    private String message;

    @Min(value = 1, message = "Xếp hạng nước hoa")
    private Integer rating;
}
