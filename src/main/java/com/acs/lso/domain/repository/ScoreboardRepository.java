package com.acs.lso.domain.repository;

import com.acs.lso.domain.entity.ScoreboardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Amila Karunathilaka
 */

@Repository
public interface ScoreboardRepository extends JpaRepository<ScoreboardEntity, Long> {

    Optional<ScoreboardEntity> findByBoardId(Long boardId);
}
