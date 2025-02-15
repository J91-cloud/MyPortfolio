package com.gjerek.portfolio.CommentsDomain.businessLayer;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import com.gjerek.portfolio.CommentsDomain.presentationLayer.CommentRequestDTO;

import java.util.List;

public interface CommentsService {

    List<Comment> getComments();

    Comment publishCommentForReview(CommentRequestDTO commentRequestDTO);

    Void acceptCommentForReview(String commentId);
    Void deleteComment(String commentId);

}
