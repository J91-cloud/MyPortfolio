package com.gjerek.portfolio.ProfileDomain.dataLayer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Profile findProfileByProfileIdentifier_ProfileId(String profileId);
}
