package com.gjerek.portfolio.SkillsDomain.businessLayer;

import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillRequestDTO;

import java.util.List;


public interface SkillService {

    List<Skill> getAllSkills();
    Skill addSkill(SkillRequestDTO skillRequestDTO);

}
