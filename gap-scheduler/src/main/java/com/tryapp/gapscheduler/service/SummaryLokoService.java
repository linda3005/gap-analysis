package com.tryapp.gapscheduler.service;

import com.tryapp.gapscheduler.domain.Summary;
import com.tryapp.gapscheduler.repository.SummaryRepository;

public class SummaryLokoService {
    private final SummaryRepository summaryRepository;

    public SummaryLokoService(SummaryRepository summaryRepository){
        this.summaryRepository = summaryRepository;
    }

    public Summary getNewData() {
        return summaryRepository.findTopByOrderByCreatedAtDesc();
    }

}
