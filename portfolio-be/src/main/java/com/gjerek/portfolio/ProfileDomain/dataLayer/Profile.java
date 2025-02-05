package com.gjerek.portfolio.ProfileDomain.dataLayer;

import com.gjerek.portfolio.utils.identifiers.ProfileIdentifier;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Builder
@Table(name = "profile")
@AllArgsConstructor
@NoArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    ProfileIdentifier profileIdentifier;


    private String name;
    private Integer age;
    private String gender;
    private String email;
    private String phoneNumber;
    private String address;
    @Lob
    @Column()
    private String shortBio;
    @Lob
    @Column()
    private String description;

}
