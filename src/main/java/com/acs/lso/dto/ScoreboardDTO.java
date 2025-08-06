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
public class ScoreboardDTO {

    private Long id;
    private String matchId;
    private String matchLevel;
    private PlayerDTO player1;
    private PlayerDTO player2;

    private Integer noOfBoards;
}
