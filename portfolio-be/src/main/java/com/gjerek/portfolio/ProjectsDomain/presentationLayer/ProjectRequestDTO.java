package com.gjerek.portfolio.ProjectsDomain.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjectRequestDTO {
    private String name;
    private String description;
    private String startDate;
    private String endDate;
    private String githubLink;
}
