package com.gjerek.portfolio.utils.DataLoaders;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import com.gjerek.portfolio.CommentsDomain.dataLayer.CommentRepository;
import com.gjerek.portfolio.utils.identifiers.CommentIdentifier;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CommentsLoader {

    @Autowired
    CommentRepository commentRepository;

    public void loadData(){

        Comment comment1 = Comment.builder()
                .commentIdentifier(new CommentIdentifier("YY6d087b-e708-4293-925b-40b2972741oo"))
                .name("James Duhan")
                .content("Great Profile Jessy. I recommend you try and complete more hackathons for your profile. You seem like your intersted in coding.")
                .profession("Professor at Concordia")
                .build();
        commentRepository.save(comment1);

        Comment comment2 = Comment.builder()
                .commentIdentifier(new CommentIdentifier("AA6d087b-e708-4293-925b-40b2972741tt"))
                .name("Doug Peterson")
                .content("I had Jessy as a high school student and he was great, always showed up and paid attention to what we were teaching")
                .profession("Professor at Saint-Lambert High School")
                .build();
        commentRepository.save(comment2);

        Comment comment3 = Comment.builder()
                .commentIdentifier(new CommentIdentifier("ZZ6d087b-e708-4293-925b-40b2972741aa"))
                .name("George Stephan")
                .content("Had a great time working with Jessy when we build our first web application together, very dedicated and always helped debug our problems")
                .profession("Student and Friend of Jessy")
                .build();
        commentRepository.save(comment3);


    }
}
