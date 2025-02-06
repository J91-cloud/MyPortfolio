package com.gjerek.portfolio.CommentsDomain.presentationLayer;

import com.gjerek.portfolio.CommentsDomain.businessLayer.CommentsService;
import com.gjerek.portfolio.CommentsDomain.dataLayer.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<Comment> addComment(@RequestBody CommentRequestDTO commentRequestDTO) {
        Comment newComment = commentsService.publishCommentForReview(commentRequestDTO);
        return new ResponseEntity<>(newComment, HttpStatus.CREATED);
    }


    @PatchMapping("/{commentId}")
    public ResponseEntity<Void> reviewComment(@PathVariable String commentId) {
        commentsService.acceptCommentForReview(commentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
