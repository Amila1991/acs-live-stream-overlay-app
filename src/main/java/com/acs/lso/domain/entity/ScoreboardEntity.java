package com.acs.lso.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Amila Karunathilaka
 */

@Getter
@Setter
@Entity
@Table(name = "scoreboard")
public class ScoreboardEntity extends BaseEntity {

    @Column(name = "match_id", nullable = false)
    private String matchId;

    @Column(name = "match_level")
    private String matchLevel;

    @Embedded
    @AttributeOverrides(value = {
            @AttributeOverride(name = "name", column = @Column(name = "player1_name")),
            @AttributeOverride(name = "team", column = @Column(name = "player1_team")),
            @AttributeOverride(name = "currentScore", column = @Column(name = "player1_current_score")),
            @AttributeOverride(name = "noOfSetWins", column = @Column(name = "player1_no_of_set_wins"))
    })
    private Player player1;

    @Embedded
    @AttributeOverrides(value = {
            @AttributeOverride(name = "name", column = @Column(name = "player2_name")),
            @AttributeOverride(name = "team", column = @Column(name = "player2_team")),
            @AttributeOverride(name = "currentScore", column = @Column(name = "player2_current_score")),
            @AttributeOverride(name = "noOfSetWins", column = @Column(name = "player2_no_of_set_wins"))
    })
    private Player player2;

    @Column(name = "board_id")
    private Long boardId;

    @Column(name = "no_of_boards")
    private Integer noOfBoards;

}
