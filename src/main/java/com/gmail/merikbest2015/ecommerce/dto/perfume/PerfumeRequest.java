package com.gmail.merikbest2015.ecommerce.dto.perfume;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class PerfumeRequest {

    private Long id;
    private String filename;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String perfumeTitle;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String perfumer;

    @NotNull(message = "Điền vào trường đầu vào")
    private Integer year;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String country;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String perfumeGender;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String fragranceTopNotes;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String fragranceMiddleNotes;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String fragranceBaseNotes;

    @NotNull(message = "Điền vào trường đầu vào")
    private Integer price;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String volume;

    @NotBlank(message = "Điền vào trường đầu vào")
    @Length(max = 255)
    private String type;
}
