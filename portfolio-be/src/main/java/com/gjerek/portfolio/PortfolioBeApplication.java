package com.gjerek.portfolio;

import com.gjerek.portfolio.CommentsDomain.dataLayer.CommentRepository;
import com.gjerek.portfolio.EducationDomain.dataLayer.EducationRepository;
import com.gjerek.portfolio.ProfileDomain.dataLayer.ProfileRepository;
import com.gjerek.portfolio.ProjectsDomain.dataLayer.ProjectRepository;
import com.gjerek.portfolio.SkillsDomain.dataLayer.SkillRepository;
import com.gjerek.portfolio.utils.DataLoaders.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PortfolioBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioBeApplication.class, args);
	}


	/*
	This can be the class where you will have your data loader service for testing.
	 */

	@Bean
	public CommandLineRunner runSkillsLoader(SkillsLoader dataLoaderService, SkillRepository skillRepository) {
		return args -> {
			if (skillRepository.count() == 0) {
				dataLoaderService.loadData();
			}
		};
	}
	@Bean
	public CommandLineRunner runCommentsLoader(CommentsLoader dataLoaderService, CommentRepository commentRepository) {
		return args -> {
			if (commentRepository.count() == 0) {
				dataLoaderService.loadData();
			}
		};
	}
	@Bean
	public CommandLineRunner runProfileLoader(ProfileLoader dataLoaderService, ProfileRepository profileRepository) {
		return args -> {
			if (profileRepository.count() == 0) {
				dataLoaderService.loadProfile();
			}
		};
	}
	@Bean
	public CommandLineRunner runEducationLoader(EducationsLoader dataLoaderService, EducationRepository educationRepository) {
		return args -> {
			if (educationRepository.count() == 0) {
				dataLoaderService.loadData();
			}
		};
	}
	@Bean
	public CommandLineRunner runProjectLoader(ProjectsLoader dataLoaderService, ProjectRepository projectRepository) {
		return args -> {
			if (projectRepository.count() == 0) {
				dataLoaderService.loadData();
			}
		};
	}



}
