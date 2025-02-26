package com.gjerek.portfolio.ProjectsDomain.dataLayer;

import com.gjerek.portfolio.utils.identifiers.ProjectIdentifier;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "projects")
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;

    @Embedded
    ProjectIdentifier projectIdentifier;

    private String name;
    private String description;
    private String startDate;
    private String endDate;
    @Column(length = 6000) // Adjust length as needed
    private String imageUrl;
    private String githubClone;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String githubLink;

}
