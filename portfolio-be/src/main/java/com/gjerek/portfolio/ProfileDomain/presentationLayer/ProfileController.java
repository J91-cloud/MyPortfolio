package com.gjerek.portfolio.ProfileDomain.presentationLayer;

import com.gjerek.portfolio.ProfileDomain.businessLayer.ProfileService;
import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{profileId}")
    public ResponseEntity<Profile> getProfileById(@PathVariable Long profileId) {
        return new ResponseEntity<>(profileService.getProfileByProfileId(profileId), HttpStatus.OK);
    }

    @PutMapping("/{profileId}")
    public ResponseEntity<Profile> updateProfile(
            @PathVariable Long profileId,
            @RequestBody ProfileRequestDTO profileRequestDTO) {

        Profile updatedProfile = profileService.updateProfile(profileId, profileRequestDTO);
        return ResponseEntity.ok(updatedProfile);
    }


}
