package com.acs.lso.service.mapper;

import com.acs.lso.domain.entity.Player;
import com.acs.lso.dto.PlayerDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

/**
 * @author Amila Karunathilaka
 */
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PlayerMapper extends BaseMapper<Player, PlayerDTO> {
}
