package com.tryapp.gapscheduler.domain;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@Entity
public class Lokomotif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String kodeLoko;
    private String namaLoko;
    private String dimensiLoko;
    private String status;
    private LocalDate tanggal;
    private LocalTime jam;
}