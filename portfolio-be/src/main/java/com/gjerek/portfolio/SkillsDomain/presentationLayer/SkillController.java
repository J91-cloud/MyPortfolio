package com.gjerek.portfolio.SkillsDomain.presentationLayer;

import com.gjerek.portfolio.SkillsDomain.businessLayer.SkillService;
import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/skills")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    public ResponseEntity<List<Skill>> getSkills() {
        return new ResponseEntity<>(skillService.getAllSkills(), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Skill> addSkill(@RequestBody SkillRequestDTO skillRequestDTO) {
        Skill savedSkill = skillService.addSkill(skillRequestDTO);
        return new ResponseEntity<>(savedSkill, HttpStatus.CREATED);
    }

    @DeleteMapping("/{skillId}")
    public ResponseEntity<Void> deleteSkill(@PathVariable String skillId) {
        skillService.deleteSkill(skillId);
        return ResponseEntity.noContent().build(); // Returns HTTP 204 No Content
    }



}
