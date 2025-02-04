package com.gjerek.portfolio.utils.identifiers;

import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.UUID;

@Embeddable
@Getter
public class SkillIdentifier {

    private String skillId;

    public SkillIdentifier() {
        this.skillId = UUID.randomUUID().toString();
    }

    public SkillIdentifier(String skillId) {
        this.skillId = skillId;
    }


}
