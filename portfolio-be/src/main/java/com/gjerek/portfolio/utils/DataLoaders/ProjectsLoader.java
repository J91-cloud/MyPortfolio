package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.ProjectsDomain.dataLayer.Category;
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
                .githubClone("https://github.com/cgerard321/champlain_petclinic.git")
                .imageUrl("https://media-hosting.imagekit.io//a7dd1707b4574a32/Schedule.png?Expires=1835187479&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sOuej1jkoNiNaiiOHK4uPWEDXOF8QoJXNG~WuZOzbJ7FURrWEKqDzOGjXymxb53-kTbRiN6tVBhk40AhqohwxDoBwaNMhx85hO8xLvBAdeUfQi7ESBua4JhPnZj-9De7GffTTNpo83HAdhTjYO1hwye2V1mjeCvHdY5LZUZQlVIB3NYu9EeFfcWnloSd7tcsiEQo8xclGX6W3qWK2J0CqJR9Krmgo2Tpw5ENZMHOpdAOrybnLLnN~KeXGBxs865CHNZKroyp0uvXpwakWl7d21G9VnyAQIaj8SuEBXCPcr0z63uuMrgfe9TLDQFDlxSZWuncL2xoAfUvJXAea7TKsQ__")
                .category(Category.WEB_DEVELOPMENT)
                .build();
        projectRepository.save(project1);

        Project project2 = Project.builder()
                .name("League Alerts")
                .startDate("December 2024")
                .endDate("February 2025")
                .projectIdentifier(new ProjectIdentifier("CC6d087b-e708-4293-925b-40b2972741CC"))
                .description("Deployed Web Application for League Alerts Media, team of 4 performing a task to build a complete web application")
                .githubLink("https://league-alerts.web.app/")
                .imageUrl("https://media-hosting.imagekit.io//a4fc04966ee5480f/githubv.jpg?Expires=1835189412&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f8JAQ7G3t3HgiuaqzoIrMSogb1V4FacEdmeFk-oCxLAJNOgmf-QzuDr9lKufwXe6~QkB7WfrDFAO281jOiWFamOILRyCOUByCAb69yPTro1xJBtvRWncVlvkOSE3q-owjswgg2tyPGKT1rW9UGV3k~7RmuSFZJgRzwlFFyeV5zfXcBfpco~P6q~xIjhYz0hGFIiBiSlalavS4X-98vaQI4Qlc2MUHmXAlKzvrpw7kDtVnjzIVX0kPTv4M-fbwWrWD5l3brIJwEfz-6ZwzZAiwdn2-XOjd9MyFtzOGVh49xG8N1kHmyGGpXKOjyRKusv42a6K9NQZCML8zopLWvAVQQ__")
                .githubClone("https://github.com/J91-cloud/league_alerts-Group-ChamplainECP.git")
                .category(Category.WEB_DEVELOPMENT)
                .build();
        projectRepository.save(project2);

    }

}
