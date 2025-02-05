package com.gjerek.portfolio.ProfileDomain.businessLayer;

import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import com.gjerek.portfolio.ProfileDomain.dataLayer.ProfileRepository;
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
}
