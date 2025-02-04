package com.gjerek.portfolio.CommentsDomain.dataLayer;


import com.gjerek.portfolio.utils.identifiers.CommentIdentifier;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "comments")
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    CommentIdentifier  commentIdentifier;

    private String name;

    private String content;

    private String profession;



}
