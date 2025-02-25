package com.gjerek.portfolio.SkillsDomain.dataLayer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    Skill findSkillBySkillIdentifier_SkillId(String skillId);

}
