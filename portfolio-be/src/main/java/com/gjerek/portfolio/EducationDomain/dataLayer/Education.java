package com.gjerek.portfolio.EducationDomain.dataLayer;

import com.gjerek.portfolio.utils.identifiers.EducationIdentifier;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Entity
@Builder
@Table(name = "education")
@NoArgsConstructor
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    EducationIdentifier educationIdentifier;

    private String schoolName;
    private String year;
    private String location;
    private String description;
}
