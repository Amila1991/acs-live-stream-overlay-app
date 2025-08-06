package com.acs.lso.service.impl;

import com.acs.lso.domain.entity.ScoreboardEntity;
import com.acs.lso.domain.repository.ScoreboardRepository;
import com.acs.lso.dto.ScoreboardDTO;
import com.acs.lso.service.ScoreBoardService;
import com.acs.lso.service.mapper.ScorecardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author Amila Karunathilaka
 */

@Slf4j
@RequiredArgsConstructor
@Service
public class ScoreboardServiceImpl implements ScoreBoardService {

    private final ScoreboardRepository scoreboardRepository;

    private final ScorecardMapper scorecardMapper;

    @Override
    public ScoreboardDTO createScoreboard(ScoreboardDTO scoreboard) {
        return null;
    }

    @Override
    public ScoreboardDTO getScoreboardById(Long boardId) {
        Optional<ScoreboardEntity> scoreboardEntity = scoreboardRepository.findByBoardId(boardId);
        return  scoreboardEntity.map(scorecardMapper::toDto).orElse(null);
    }
}
