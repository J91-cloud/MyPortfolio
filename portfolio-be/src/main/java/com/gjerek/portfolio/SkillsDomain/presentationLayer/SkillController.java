package com.gjerek.portfolio.SkillsDomain.presentationLayer;

import com.gjerek.portfolio.SkillsDomain.businessLayer.SkillService;
import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/skills")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }


    @PostMapping()
    public ResponseEntity<Skill> addSkill(@RequestBody SkillRequestDTO skillRequestDTO) {
        Skill newSkill = skillService.addSkill(skillRequestDTO);
        return new ResponseEntity<>(newSkill, HttpStatus.CREATED);
    }

}
