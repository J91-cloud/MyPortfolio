package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import com.gjerek.portfolio.ProfileDomain.dataLayer.ProfileRepository;
import com.gjerek.portfolio.utils.identifiers.ProfileIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileLoader {
    @Autowired
    private ProfileRepository profileRepository;

    public void loadProfile() {
        Profile profile = Profile.builder()
                .profileIdentifier(new ProfileIdentifier("996d087b-e708-4293-925b-40b297274199"))
                .age(19)
                .email("jessygjerek2@gmail.com")
                .gender("Male")
                .address("Montreal, QU Canada")
                .shortBio("Young developer who loves to learn about all the new technologies that are introduced to the world")
                .description("I am 3rd year student at the Champlain College at Saint-Lambert, during these 3 years i have learned a lot and love the world of technology" +
                        "Every week i try and read and learn about the new technologies being developed and try and implement it some way. My strenghts are in web development where i have produced numerous web" +
                        "application for corporations. I love to talk about technology with other colleagues and friends")
                .phoneNumber("+1 438-596-9981")
                .name("Jessy Gjerek")
                .build();
        profileRepository.save(profile);

    }
}
