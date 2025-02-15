package com.gjerek.portfolio.AuthMessageDomain.businessLayer;

import com.gjerek.portfolio.AuthMessageDomain.presentationLayer.ContactRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(ContactRequestDTO contactRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("jessygjerek2@gmail.com"); // Your email address
        message.setSubject("Portfolio Contact Question:: " + contactRequest.getName());
        message.setText(
                "Name: " + contactRequest.getName() + "\n" +
                        "Email: " + contactRequest.getEmail() + "\n" +
                        "Message: " + contactRequest.getMessage()
        );
        mailSender.send(message);
    }
}
