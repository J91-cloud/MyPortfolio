package com.gjerek.portfolio.SkillsDomain.dataLayer;


import com.gjerek.portfolio.utils.identifiers.SkillIdentifier;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "skills")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    SkillIdentifier skillIdentifier;



    @Column(name = "skill_type", nullable = false)
    private String skillType;

}
