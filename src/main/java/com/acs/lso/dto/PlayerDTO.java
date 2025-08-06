package com.acs.lso.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author Amila Karunathilaka
 */
@ToString
@Getter
@Setter
public class PlayerDTO {

    private String name;
    private String team;
    private Integer currentScore;
    private Integer noOfSetWins;

}
