package com.tryapp.gapscheduler.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.tryapp.gapscheduler.domain.Lokomotif;
import com.tryapp.gapscheduler.domain.Summary;
import com.tryapp.gapscheduler.repository.SummaryRepository;

@Service
public class MongoLokomotifService {

    private final MongoTemplate mongoTemplate;
    private final SummaryRepository summaryRepository;

    public MongoLokomotifService(MongoTemplate mongoTemplate, SummaryRepository summaryRepository) {
        this.mongoTemplate = mongoTemplate;
        this.summaryRepository = summaryRepository;
    }

    public List<Lokomotif> fetchDataFromMongo() {
        return mongoTemplate.findAll(Lokomotif.class);
    }

    public void fetchDataRegularly() {
        List<Lokomotif> data = fetchDataFromMongo();

        if (data != null && !data.isEmpty()) {
            Summary summary = createSummary(data);
            summaryRepository.save(summary);
        }
    }

    private Summary createSummary(List<Lokomotif> data) {
        int totalLokomotif = data.size();
        int totalGood = 0;
        int totalExcellent = 0;
        int totalPoor = 0;

        for (Lokomotif entity : data) {
            switch (entity.getStatus()) {
                case "Beroperasi":
                    totalGood++;
                    break;
                case "Diperbaiki":
                    totalExcellent++;
                    break;
                case "Ditangguhkan":
                    totalPoor++;
                    break;
                default:
                    break;
            }
        }

        return buildSummary(totalLokomotif, totalGood, totalExcellent, totalPoor);
    }

    private Summary buildSummary(int totalLokomotif, int totalGood, int totalExcellent, int totalPoor) {
        return Summary.builder()
                .id(UUID.randomUUID())
                .dateTime(LocalDateTime.now())
                .totalGood(totalGood)
                .totalExcellent(totalExcellent)
                .totalPoor(totalPoor)
                .totalLokomotif(totalLokomotif)
                .build();
    }
}
