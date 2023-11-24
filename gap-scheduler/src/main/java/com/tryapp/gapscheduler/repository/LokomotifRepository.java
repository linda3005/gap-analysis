package com.tryapp.gapscheduler.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tryapp.gapscheduler.domain.Lokomotif;

public interface LokomotifRepository extends JpaRepository<Lokomotif, UUID> {
    
}


