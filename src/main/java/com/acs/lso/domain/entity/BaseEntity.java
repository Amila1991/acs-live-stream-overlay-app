package com.acs.lso.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * @author Amila Karunathilaka
 */
@Getter
@Setter
@MappedSuperclass
public abstract class BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "created_by", nullable = false)
    private String createdBy;

    @Column(name = "created_dt", nullable = false)
    private ZonedDateTime createdDt;

    @Column(name = "updated_by", nullable = false)
    private String updatedBy;

    @Column(name = "updated_dt", nullable = false)
    private ZonedDateTime updatedDt;

    @Version
    private int version;

}
