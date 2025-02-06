package com.gjerek.portfolio.CommentsDomain.businessLayer;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import com.gjerek.portfolio.CommentsDomain.dataLayer.CommentRepository;
import com.gjerek.portfolio.CommentsDomain.dataLayer.Status;
import com.gjerek.portfolio.CommentsDomain.presentationLayer.CommentRequestDTO;
import com.gjerek.portfolio.utils.identifiers.CommentIdentifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentsServiceImpl implements CommentsService {

    @Autowired
    CommentRepository commentRepository;

    @Override
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }

    @Override
    public Comment publishCommentForReview(CommentRequestDTO commentRequestDTO) {

        Comment comment = Comment.builder()
                .name(commentRequestDTO.getName())
                .commentIdentifier(new CommentIdentifier(UUID.randomUUID().toString()))
                .content(commentRequestDTO.getContent())
                .profession(commentRequestDTO.getProfession())
                .status(Status.REVIEW)
                .build();


        return commentRepository.save(comment);
    }

    @Override
    public Void acceptCommentForReview(String commentId) {
        // Find the comment by CommentIdentifier (your custom identifier)
        Comment comment = commentRepository.findCommentByCommentIdentifier_CommentId(commentId);

        if (comment != null) {
            comment.setStatus(Status.PUBLISHED);
            commentRepository.save(comment);
        } else {
            System.out.println("Id not found");
        }
        return null;
    }


}
