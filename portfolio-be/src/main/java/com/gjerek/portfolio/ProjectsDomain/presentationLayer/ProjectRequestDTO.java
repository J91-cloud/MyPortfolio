package com.gjerek.portfolio.ProjectsDomain.presentationLayer;

import com.gjerek.portfolio.ProjectsDomain.dataLayer.Category;
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
    private String imageUrl;
    private String githubClone;
    private Category category;
}
