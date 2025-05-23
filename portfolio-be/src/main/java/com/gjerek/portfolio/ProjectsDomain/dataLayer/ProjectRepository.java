package com.gjerek.portfolio.ProjectsDomain.dataLayer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Project findProjectByProjectIdentifier_ProjectId(String projectId);
}
