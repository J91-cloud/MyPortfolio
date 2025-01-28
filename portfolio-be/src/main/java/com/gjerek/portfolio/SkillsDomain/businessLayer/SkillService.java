package com.gjerek.portfolio.SkillsDomain.businessLayer;

import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillRequestDTO;


public interface SkillService {
    
    Skill addSkill(SkillRequestDTO skillRequestDTO);

}
