package com.gjerek.portfolio.ProfileDomain.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProfileResponseDTO {
    private String profileId;
    private String name;
    private Integer age;
    private String gender;
    private String email;
    private String phoneNumber;
    private String address;
    private String shortBio;
    private String description;
}
