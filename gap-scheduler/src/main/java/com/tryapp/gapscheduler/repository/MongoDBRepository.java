package com.tryapp.gapscheduler.repository;

import java.util.UUID;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.tryapp.gapscheduler.domain.Lokomotif;

public interface MongoDBRepository extends MongoRepository<Lokomotif, UUID>{
    
}
