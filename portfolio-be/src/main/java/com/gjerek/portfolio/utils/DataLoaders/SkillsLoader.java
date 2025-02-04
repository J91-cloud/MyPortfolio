package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.SkillsDomain.dataLayer.SkillRepository;
import com.gjerek.portfolio.utils.identifiers.SkillIdentifier;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class SkillsLoader {

    @Autowired
    SkillRepository skillRepository;

    public void loadData() {
        // Load data for Entity1
        Skill skill1 = Skill.builder()
                .skillIdentifier(new SkillIdentifier("806d087b-e708-4293-925b-40b2972741e5"))
                .skillType("HTML")
                .build();
        skillRepository.save(skill1);

        Skill skill2 = Skill.builder()
                .skillIdentifier(new SkillIdentifier("916d087b-e708-4293-925b-40b2972741xx"))
                .skillType("JAVA")
                .build();
        skillRepository.save(skill2);


        Skill skill3 = Skill.builder()
                .skillIdentifier(new SkillIdentifier("316d087b-e708-4293-925b-40b2972741zz"))
                .skillType("PostgreSQL")
                .build();
        skillRepository.save(skill3);


        Skill skill4 = Skill.builder()
                .skillIdentifier(new SkillIdentifier("216d087b-e708-4293-925b-40b2972741yy"))
                .skillType("JavaScript")
                .build();
        skillRepository.save(skill4);

        Skill skill5 = Skill.builder()
                .skillIdentifier(new SkillIdentifier("116d087b-e708-4293-925b-40b2972741ee"))
                .skillType("CSS")
                .build();
        skillRepository.save(skill5);



        System.out.println("Data loaded successfully!");
    }


}
