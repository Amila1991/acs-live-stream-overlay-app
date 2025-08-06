package com.acs.lso;

import com.acs.lso.domain.entity.Player;
import com.acs.lso.domain.entity.ScoreboardEntity;
import com.acs.lso.domain.repository.ScoreboardRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.ZonedDateTime;

/**
 * @author Amila Karunathilaka
 */

@SpringBootApplication
public class AcsLiveStreamOverlayAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(AcsLiveStreamOverlayAppApplication.class, args);
    }

    @Bean
    public ApplicationRunner runner(ScoreboardRepository scoreboardRepository) {
        return args -> {
            ScoreboardEntity scoreboard = new ScoreboardEntity();
            scoreboard.setBoardId(1L);
            scoreboard.setMatchId("12");
            scoreboard.setMatchLevel("1");
            scoreboard.setNoOfBoards(2);
            scoreboard.setCreatedBy("SYSTEM");
            scoreboard.setUpdatedBy("SYSTEM");
            scoreboard.setCreatedDt(ZonedDateTime.now());
            scoreboard.setUpdatedDt(ZonedDateTime.now());
            Player player1 = new Player();
            player1.setName("Amila");
            player1.setTeam("A");
            player1.setCurrentScore(10);
            player1.setNoOfSetWins(1);
            Player player2 = new Player();
            player2.setName("Lenus");
            player2.setTeam("B");
            player2.setCurrentScore(15);
            player2.setNoOfSetWins(0);
            scoreboard.setPlayer1(player1);
            scoreboard.setPlayer2(player2);
            scoreboardRepository.save(scoreboard);
        };
    }

}
