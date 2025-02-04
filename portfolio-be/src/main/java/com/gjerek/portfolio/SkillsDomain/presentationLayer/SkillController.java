package com.gjerek.portfolio.SkillsDomain.presentationLayer;

import com.gjerek.portfolio.SkillsDomain.businessLayer.SkillService;
import com.gjerek.portfolio.SkillsDomain.dataLayer.Skill;
import com.gjerek.portfolio.utils.identifiers.SkillIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/skills")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

//    @GetMapping
//    public ResponseEntity<List<SkillResponseDTO>> getSkills() {
//
//
//        return skillService.getAllSkills();
//    }


    @PostMapping()
    public ResponseEntity<SkillResponseDTO> addSkill(@RequestBody SkillRequestDTO skillRequestDTO) {
        Skill newSkill = skillService.addSkill(skillRequestDTO);
        SkillResponseDTO responseDTO = new SkillResponseDTO();
        responseDTO.setSkillId(UUID.randomUUID().toString());
        responseDTO.setSkillType(newSkill.getSkillType());
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

}
