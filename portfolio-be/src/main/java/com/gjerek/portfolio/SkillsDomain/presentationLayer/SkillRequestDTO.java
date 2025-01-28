package com.gjerek.portfolio.SkillsDomain.presentationLayer;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SkillRequestDTO {

    private String skillType;
}
