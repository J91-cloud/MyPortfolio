package com.gjerek.portfolio.ProfileDomain.businessLayer;

import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import com.gjerek.portfolio.ProfileDomain.dataLayer.ProfileRepository;
import com.gjerek.portfolio.ProfileDomain.presentationLayer.ProfileRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public List<Profile> getProfile() {
        return profileRepository.findAll();
    }

    @Override
    public Profile getProfileByProfileId(Long id) {
        return profileRepository.findById(id).orElse(null);
    }


    @Override
    public Profile updateProfile(Long id, ProfileRequestDTO profileRequestDTO) {
        Profile profile = profileRepository.findById(id).orElse(null);

        profile.setName(profileRequestDTO.getName());
        profile.setAge(profileRequestDTO.getAge());
        profile.setGender(profileRequestDTO.getGender());
        profile.setEmail(profileRequestDTO.getEmail());
        profile.setPhoneNumber(profileRequestDTO.getPhoneNumber());
        profile.setAddress(profileRequestDTO.getAddress());
        profile.setShortBio(profileRequestDTO.getShortBio());
        profile.setDescription(profileRequestDTO.getDescription());


        return profileRepository.save(profile);

    }

}
