package com.tryapp.gapscheduler.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tryapp.gapscheduler.domain.Summary;
import java.util.List;


public interface SummaryRepository extends JpaRepository<Summary, UUID> {
    Summary findTopByOrderByCreatedAtDesc();
    List<Summary> findAllByOrderByTimestampsDesc();
    List<Summary> findAllByOrderByTimestampsAsc();
}
