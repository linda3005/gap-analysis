package com.tryapp.gapscheduler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tryapp.gapscheduler.domain.Lokomotif;

public interface LokomotifRepository extends JpaRepository<Lokomotif, Long> {
    
}
