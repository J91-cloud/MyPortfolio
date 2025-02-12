package com.gjerek.portfolio.ProjectsDomain.businessLayer;

import com.gjerek.portfolio.ProjectsDomain.dataLayer.Project;
import com.gjerek.portfolio.ProjectsDomain.dataLayer.ProjectRepository;
import com.gjerek.portfolio.ProjectsDomain.presentationLayer.ProjectRequestDTO;
import com.gjerek.portfolio.utils.identifiers.ProjectIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project getProjectByProjectId(String projectId) {
        return projectRepository.findProjectByProjectIdentifier_ProjectId(projectId);
    }

    @Override
    public Project addProject(ProjectRequestDTO projectRequestDTO) {
        Project project = Project.builder()
                .projectIdentifier(new ProjectIdentifier(UUID.randomUUID().toString()))
                .name(projectRequestDTO.getName())
                .description(projectRequestDTO.getDescription())
                .githubLink(projectRequestDTO.getGithubLink())
                .endDate(projectRequestDTO.getEndDate())
                .startDate(projectRequestDTO.getStartDate())
                .build();
        return projectRepository.save(project);
    }

    @Override
    public void deleteProject(String projectId) {
        Project project = projectRepository.findProjectByProjectIdentifier_ProjectId(projectId);
        projectRepository.delete(project);


    }
}
