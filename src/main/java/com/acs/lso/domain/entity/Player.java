package com.acs.lso.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Amila Karunathilaka
 */

@Getter
@Setter
@Embeddable
public class Player {

    @Column(name = "player_name")
    public String name;
    @Column(name = "player_team")
    public String team;
    @Column(name = "current_score")
    private Integer currentScore;
    @Column(name = "no_of_set_wins")
    private Integer noOfSetWins;

}
