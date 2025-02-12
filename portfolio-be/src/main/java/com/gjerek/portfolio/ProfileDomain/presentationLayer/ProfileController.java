package com.gjerek.portfolio.ProfileDomain.presentationLayer;

import com.gjerek.portfolio.ProfileDomain.businessLayer.ProfileService;
import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {
    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {this.profileService = profileService;}

    @GetMapping
    public ResponseEntity<List<Profile>> getProfile() {
        return ResponseEntity.ok(profileService.getProfile());
    }

}
