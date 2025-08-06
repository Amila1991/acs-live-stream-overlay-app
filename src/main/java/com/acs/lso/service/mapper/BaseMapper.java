package com.acs.lso.service.mapper;

import org.mapstruct.MapperConfig;
import org.mapstruct.MappingConstants;

import java.util.List;

/**
 * @author Amila Karunathilaka
 */
@MapperConfig(componentModel = MappingConstants.ComponentModel.SPRING)
public interface BaseMapper<E, D> {

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntityList(List<D> dtoList);

    List<D> toDtoList(List<E> entityList);
}
