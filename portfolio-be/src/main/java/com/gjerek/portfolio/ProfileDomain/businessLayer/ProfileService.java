package com.gjerek.portfolio.ProfileDomain.businessLayer;


import com.gjerek.portfolio.ProfileDomain.dataLayer.Profile;
import com.gjerek.portfolio.ProfileDomain.presentationLayer.ProfileRequestDTO;

import java.util.List;

public interface ProfileService {
    List<Profile> getProfile();
    Profile updateProfile(String profileId,ProfileRequestDTO profileRequestDTO);


}
