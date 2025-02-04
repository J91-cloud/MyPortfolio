package com.gjerek.portfolio.CommentsDomain.dataLayer;


import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
