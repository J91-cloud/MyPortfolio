package com.gjerek.portfolio;

import com.gjerek.portfolio.CommentsDomain.dataLayer.CommentRepository;
import com.gjerek.portfolio.SkillsDomain.dataLayer.SkillRepository;
import com.gjerek.portfolio.utils.DataLoaders.CommentsLoader;
import com.gjerek.portfolio.utils.DataLoaders.SkillsLoader;
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



}
