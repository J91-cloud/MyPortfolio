package com.gjerek.portfolio.utils.identifiers;

import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.UUID;

@Embeddable
@Getter
public class ProjectIdentifier {

    private String projectId;

    public ProjectIdentifier() {
        this.projectId = UUID.randomUUID().toString();
    }

    public ProjectIdentifier(String projectId) {
        this.projectId = projectId;
    }


}
