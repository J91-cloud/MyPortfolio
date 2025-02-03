package com.gjerek.portfolio.SkillsDomain.businessLayer;

import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.SkillsDomain.dataLayer.SkillRepository;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillRequestDTO;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SkillServiceImpl implements SkillService{

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Skill getAllSkills() {
        return null;
    }

    public Skill addSkill(SkillRequestDTO skillRequestDTO) {
        Skill skill = new Skill();
        skill.setSkillType(skillRequestDTO.getSkillType());
        return skillRepository.save(skill);
    }
}
