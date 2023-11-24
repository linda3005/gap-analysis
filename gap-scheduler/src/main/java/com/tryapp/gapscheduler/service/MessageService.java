package com.tryapp.gapscheduler.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


import com.tryapp.gapscheduler.domain.Summary;
import com.tryapp.gapscheduler.repository.SummaryRepository;

public class MessageService {
    private final SummaryRepository summaryRepository;

    public MessageService(SummaryRepository summaryRepository) {
        this.summaryRepository = summaryRepository;
    }

    

    public List<Summary> getDataAll(int page, int size, String orderBy) {
        Pageable pageable;

        if ("Desc".equalsIgnoreCase(orderBy)) {
            pageable = PageRequest.of(page, size, Sort.by("timestamps").descending());
        } else if ("Asc".equalsIgnoreCase(orderBy)) {
            pageable = PageRequest.of(page, size, Sort.by("timestamps").ascending());
        } else {
            pageable = PageRequest.of(page, size);
        }

        Page<Summary> summaryLocosPage = summaryRepository.findAll(pageable);
        List<Summary> summaryLocos = summaryLocosPage.getContent();

        List<Summary> summaryResponses = new ArrayList<>();

        for (Summary summaryLoco : summaryLocos) {
            summaryResponses.add(summaryLoco);
        }

        return summaryResponses;
    }
    

    public Summary getLatest() {
        Summary latestSummary = summaryRepository.findTopByOrderByCreatedAtDesc();
    
        if (latestSummary != null) {
            return Summary.builder()
                .id(latestSummary.getId())
                .dateTime(latestSummary.getDateTime())
                .totalGood(latestSummary.getTotalGood())
                .totalExcellent(latestSummary.getTotalExcellent())
                .totalPoor(latestSummary.getTotalPoor())
                .totalLokomotif(latestSummary.getTotalLokomotif())
                .build();
        } else {
            return null;
        }
    }
}
