package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.EducationDomain.dataLayer.Education;
import com.gjerek.portfolio.EducationDomain.dataLayer.EducationRepository;
import com.gjerek.portfolio.utils.identifiers.EducationIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducationsLoader {

    @Autowired
    private EducationRepository educationRepository;

    public void loadData(){
        Education education1 = Education.builder()
                .educationIdentifier(new EducationIdentifier("006d087b-e708-4293-925b-40b297274100"))
                .schoolName("Saint-Lambert High School")
                .year("2018-2022")
                .location("675 Rue Green, St-Lambert QC J4P 1V9, Canada")
                .description("Participated in the School Volleyball, High Attendence Rate, small school but great")
                .build();
        educationRepository.save(education1);

        Education education2 = Education.builder()
                .educationIdentifier(new EducationIdentifier("456d087b-e708-4293-925b-40b297274145"))
                .schoolName("Champlain College, Saint-Lambert")
                .year("2022-2025")
                .location("900 Rue Riverside, St-Lambert QC J4P 3P2, Canada")
                .description("Achieved great academic success")
                .build();
        educationRepository.save(education2);




    }
}
