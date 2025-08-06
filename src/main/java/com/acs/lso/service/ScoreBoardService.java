package com.acs.lso.service;

import com.acs.lso.domain.entity.ScoreboardEntity;
import com.acs.lso.dto.ScoreboardDTO;

/**
 * @author Amila Karunathilaka
 */

public interface ScoreBoardService {

    ScoreboardDTO createScoreboard(ScoreboardDTO scoreboard);

    ScoreboardDTO getScoreboardById(Long boardId);
}
