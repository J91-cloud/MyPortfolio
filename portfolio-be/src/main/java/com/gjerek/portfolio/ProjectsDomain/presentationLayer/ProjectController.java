package com.gjerek.portfolio.ProjectsDomain.presentationLayer;

import com.gjerek.portfolio.ProjectsDomain.businessLayer.ProjectService;
import com.gjerek.portfolio.ProjectsDomain.dataLayer.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    ResponseEntity<List<Project>> getProjects() {
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);


    }
    @GetMapping("/{projectId}")
    ResponseEntity<Project> getProject(@PathVariable String projectId) {
        return new ResponseEntity<>(projectService.getProjectByProjectId(projectId), HttpStatus.OK);

    }

    @PostMapping
    ResponseEntity<Project> createProject(@RequestBody ProjectRequestDTO projectRequestDTO) {
        return new ResponseEntity<>(projectService.addProject(projectRequestDTO), HttpStatus.CREATED);
    }
    @PutMapping("/{projectId}")
    ResponseEntity<Project> updateProject(@PathVariable String projectId, @RequestBody ProjectRequestDTO projectRequestDTO) {
        return new ResponseEntity<>(projectService.updateProject(projectId, projectRequestDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<Void> deleteProject(@PathVariable String projectId) {
        projectService.deleteProject(projectId);
        return ResponseEntity.noContent().build(); // Corrected return statement
    }

}
