package com.gjerek.portfolio.EducationDomain.businessLayer;

import com.gjerek.portfolio.EducationDomain.dataLayer.Education;
import com.gjerek.portfolio.EducationDomain.dataLayer.EducationRepository;
import com.gjerek.portfolio.EducationDomain.presentationLayer.EducationRequestDTO;
import com.gjerek.portfolio.utils.identifiers.EducationIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EducationServiceImpl implements EducationService{

    @Autowired
    private EducationRepository educationRepository;

    @Override
    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }

    @Override
    public Education addEducation(EducationRequestDTO educationRequestDTO) {
        Education education = Education.builder()
                .educationIdentifier(new EducationIdentifier(UUID.randomUUID().toString()))
                .year(educationRequestDTO.getYear())
                .description(educationRequestDTO.getDescription())
                .schoolName(educationRequestDTO.getSchoolName())
                .location(educationRequestDTO.getLocation())
                .build();
        return educationRepository.save(education);
    }

    @Override
    public void deleteEducation(String educationId) {
        Education education = educationRepository.findEducationByEducationIdentifier_EducationId(educationId);
        educationRepository.delete(education);
    }


}
