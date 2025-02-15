package com.gjerek.portfolio.CommentsDomain.presentationLayer;

import com.gjerek.portfolio.CommentsDomain.dataLayer.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentRequestDTO {
    private String name;

    private String content;

    private String profession;
    private Status status;
}
