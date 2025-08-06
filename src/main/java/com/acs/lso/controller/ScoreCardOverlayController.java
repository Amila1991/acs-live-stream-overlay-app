package com.acs.lso.controller;

import com.acs.lso.dto.ScoreboardDTO;
import com.acs.lso.service.ScoreBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * @author Amila Karunathilaka
 */

@Slf4j
@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ScoreCardOverlayController {

    private final ScoreBoardService scoreBoardService;

    @RequestMapping(value = "/api/v1/scorecard/{boardId}", method = RequestMethod.GET)
    public ScoreboardDTO getScoreboard(@PathVariable(name = "boardId") Long boardId) {
        log.info("Fetching scoreboard for boardId: {}", boardId);
        return this.scoreBoardService.getScoreboardById(boardId);
    }
}
