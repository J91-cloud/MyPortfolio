package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.ProjectsDomain.dataLayer.Project;
import com.gjerek.portfolio.ProjectsDomain.dataLayer.ProjectRepository;
import com.gjerek.portfolio.utils.identifiers.ProjectIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectsLoader {
    @Autowired
    private ProjectRepository projectRepository;

    public void loadData() {
        Project project1 = Project.builder()
                .name("Champlain Pet Clinic")
                .startDate("October 2024")
                .endDate("December 2024")
                .projectIdentifier(new ProjectIdentifier("CC6d087b-e708-4293-925b-40b2972741EE"))
                .description("Fictional Pet Clinic we built as a class of 40, utilized git for and Jira to follow Scrum methodology.")
                .githubLink("https://github.com/cgerard321/champlain_petclinic.git")
                .build();
        projectRepository.save(project1);

        Project project2 = Project.builder()
                .name("League Alerts")
                .startDate("December 2024")
                .endDate("February 2025")
                .projectIdentifier(new ProjectIdentifier("CC6d087b-e708-4293-925b-40b2972741CC"))
                .description("Deployed Web Application for League Alerts Media, team of 4 performing a task to build a complete web application")
                .githubLink("https://league-alerts.web.app/")
                .build();
        projectRepository.save(project2);

    }

}
