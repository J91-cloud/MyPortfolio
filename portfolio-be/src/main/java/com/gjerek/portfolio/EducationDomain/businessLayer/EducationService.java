package com.gjerek.portfolio.EducationDomain.businessLayer;

import com.gjerek.portfolio.EducationDomain.dataLayer.Education;
import com.gjerek.portfolio.EducationDomain.presentationLayer.EducationRequestDTO;

import java.util.List;

public interface EducationService {
    List<Education> getAllEducation();
    Education addEducation(EducationRequestDTO educationRequestDTO);
    void deleteEducation(String educationId);

}
