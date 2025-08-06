package com.acs.lso.service.mapper;

import com.acs.lso.domain.entity.ScoreboardEntity;
import com.acs.lso.dto.ScoreboardDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

/**
 * @author Amila Karunathilaka
 */
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = {PlayerMapper.class})
public interface ScorecardMapper extends BaseMapper<ScoreboardEntity, ScoreboardDTO> {
}
