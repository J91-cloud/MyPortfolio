package com.gjerek.portfolio.EducationDomain.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EducationResponseDTO {
    private String schoolName;
    private String year;
    private String location;
    private String description;
}
