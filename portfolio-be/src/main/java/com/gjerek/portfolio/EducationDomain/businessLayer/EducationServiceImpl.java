package com.gjerek.portfolio.EducationDomain.businessLayer;

import com.gjerek.portfolio.EducationDomain.dataLayer.Education;
import com.gjerek.portfolio.EducationDomain.dataLayer.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationServiceImpl implements EducationService{

    @Autowired
    private EducationRepository educationRepository;

    @Override
    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }
}
