package com.tryapp.gapscheduler.domain;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="summary")
@Data
@Builder
public class Summary {
    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "total_lokomotive")
    private int totalLokomotif;

    @Column(name = "total_good")
    private int totalGood;

    @Column(name = "total_excellent")
    private int totalExcellent;

    @Column(name = "total_poor")
    private int totalPoor;

    @Column(name = "datetime")
    private LocalDateTime dateTime;
}
