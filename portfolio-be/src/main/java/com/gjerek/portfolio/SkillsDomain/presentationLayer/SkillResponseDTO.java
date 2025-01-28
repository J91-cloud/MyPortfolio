package com.gjerek.portfolio.SkillsDomain.presentationLayer;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SkillResponseDTO {

    private String skillType;
}
