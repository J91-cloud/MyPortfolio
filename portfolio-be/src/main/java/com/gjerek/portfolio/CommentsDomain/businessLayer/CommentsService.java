package com.gjerek.portfolio.CommentsDomain.businessLayer;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;

import java.util.List;

public interface CommentsService {

    List<Comment> getComments();
}
