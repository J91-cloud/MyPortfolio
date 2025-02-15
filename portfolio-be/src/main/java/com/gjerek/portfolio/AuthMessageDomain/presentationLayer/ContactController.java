package com.gjerek.portfolio.AuthMessageDomain.presentationLayer;

import com.gjerek.portfolio.AuthMessageDomain.businessLayer.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public String handleContactForm(@RequestBody ContactRequestDTO contactRequest) {
        emailService.sendEmail(contactRequest);
        return "Message sent successfully!";
    }
}
