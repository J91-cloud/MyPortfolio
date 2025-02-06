package com.gjerek.portfolio.utils.identifiers;

import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.UUID;

@Embeddable
@Getter
public class EducationIdentifier {

    private String educationId;

    public EducationIdentifier() {
        this.educationId = UUID.randomUUID().toString();
    }

    public EducationIdentifier(String educationId) {
        this.educationId = educationId;
    }


}
