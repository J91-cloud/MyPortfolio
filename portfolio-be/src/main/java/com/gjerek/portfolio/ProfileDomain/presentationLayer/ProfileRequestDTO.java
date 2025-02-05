package com.gjerek.portfolio.ProfileDomain.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileRequestDTO {
    private String name;
    private Integer age;
    private String gender;
    private String email;
    private String phoneNumber;
    private String address;
    private String shortBio;
    private String description;

}
