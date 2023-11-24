package com.tryapp.gapscheduler.domain;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Entity
@Builder
@Data
// @Document(collection = "lokomotif")
public class Lokomotif {
    @Id
    private UUID id;
    private String kodeLoko;
    private String namaLoko;
    private String dimensiLoko;
    private String status;
    private LocalDate tanggal;
    private LocalTime jam;
}