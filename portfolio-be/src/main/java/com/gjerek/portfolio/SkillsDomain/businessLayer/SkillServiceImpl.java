package com.gjerek.portfolio.SkillsDomain.businessLayer;

import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.SkillsDomain.dataLayer.SkillRepository;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillRequestDTO;
import com.gjerek.portfolio.SkillsDomain.presentationLayer.SkillResponseDTO;
import com.gjerek.portfolio.utils.identifiers.SkillIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class SkillServiceImpl implements SkillService{

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public List<Skill> getAllSkills() {
        return (List<Skill>) skillRepository.findAll();
    }

    @Override
    public Skill addSkill(SkillRequestDTO skillRequestDTO) {
        Skill skill = toSkillEntity(skillRequestDTO);
        return skillRepository.save(skill);
    }

    @Override
    public void deleteSkill(String skillId) {
        Skill skill = skillRepository.findSkillBySkillIdentifier_SkillId(skillId);
        skillRepository.delete(skill);
    }

    // Converts SkillRequestDTO into Skill Entity
    private Skill toSkillEntity(SkillRequestDTO skillRequestDTO) {
        return Skill.builder()
                .skillIdentifier(new SkillIdentifier(UUID.randomUUID().toString()))
                .skillType(skillRequestDTO.getSkillType())
                .build();
    }
}
