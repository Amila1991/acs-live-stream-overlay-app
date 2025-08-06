package com.acs.lso.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Amila Karunathilaka
 */
@Getter
@Setter
@Entity
@Table(name = "board")
public class BoardEntity extends BaseEntity {
}
