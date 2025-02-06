package com.gjerek.portfolio.ProjectsDomain.businessLayer;

import com.gjerek.portfolio.ProjectsDomain.dataLayer.Project;
import com.gjerek.portfolio.ProjectsDomain.presentationLayer.ProjectRequestDTO;

import java.util.List;

public interface ProjectService {

    List<Project> getAllProjects();

    Project addProject(ProjectRequestDTO projectRequestDTO);

    void deleteProject(String projectId);
}
