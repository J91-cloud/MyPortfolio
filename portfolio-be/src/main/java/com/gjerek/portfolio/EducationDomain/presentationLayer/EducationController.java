package com.gjerek.portfolio.EducationDomain.presentationLayer;

import com.gjerek.portfolio.EducationDomain.businessLayer.EducationService;
import com.gjerek.portfolio.EducationDomain.dataLayer.Education;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/education")
public class EducationController {
    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping
    public ResponseEntity<List<Education>> getEducations() {
     return new ResponseEntity<>(educationService.getAllEducation(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Education> addEducation(@RequestBody EducationRequestDTO educationRequestDTO) {
        return new ResponseEntity<>(educationService.addEducation(educationRequestDTO), HttpStatus.CREATED);

    }

    @DeleteMapping("/{educationId}")
    public ResponseEntity<Void> deleteEducation(@PathVariable String educationId) {
        educationService.deleteEducation(educationId);
        return ResponseEntity.noContent().build();
    }
}
