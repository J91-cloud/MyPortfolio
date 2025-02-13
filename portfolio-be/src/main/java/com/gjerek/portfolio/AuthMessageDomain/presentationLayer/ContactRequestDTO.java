package com.gjerek.portfolio.AuthMessageDomain.presentationLayer;

import lombok.Data;

@Data
public class ContactRequestDTO {
    private String name;
    private String email;
    private String message;
}
