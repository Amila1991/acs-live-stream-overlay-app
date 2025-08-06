package com.acs.lso.controller;

import com.acs.lso.service.ScoreBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ScoreboardController {

    private final ScoreBoardService scoreBoardService;
}
