package com.gjerek.portfolio.CommentsDomain.presentationLayer;

import com.gjerek.portfolio.CommentsDomain.businessLayer.CommentsService;
import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
public class CommentsController {


    private final CommentsService commentsService;

    public CommentsController(CommentsService commentsService) {
        this.commentsService = commentsService;
    }

    @GetMapping
    public ResponseEntity<List<Comment>> getComments() {
        return new ResponseEntity<>(commentsService.getComments(), HttpStatus.OK);
    }
}
