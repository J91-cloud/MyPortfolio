package com.gjerek.portfolio.utils.identifiers;
import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.UUID;

@Embeddable
@Getter
public class ProfileIdentifier {

    private String profileId;

    public ProfileIdentifier() {
        this.profileId = UUID.randomUUID().toString();
    }

    public ProfileIdentifier(String profileId) {
        this.profileId = profileId;
    }


}
