package com.gjerek.portfolio.CommentsDomain.businessLayer;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import com.gjerek.portfolio.CommentsDomain.dataLayer.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentsService {

    @Autowired
    CommentRepository commentRepository;

    @Override
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }




}
