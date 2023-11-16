package com.tryapp.gapscheduler.jobs;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import com.tryapp.gapscheduler.repository.LokomotifRepository;
import com.tryapp.gapscheduler.domain.Lokomotif;
import java.time.LocalDate;
import java.time.LocalTime;

public class LokomotifJob implements Job {

    @Autowired
    private LokomotifRepository lokomotifRepository;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        Lokomotif lokomotif = Lokomotif.builder()
                .kodeLoko("KodeDummy")
                .namaLoko("NamaDummy")
                .dimensiLoko("DimensiDummy")
                .status("StatusDummy")
                .tanggal(LocalDate.now())
                .jam(LocalTime.now())
                .build();

        lokomotifRepository.save(lokomotif);
    }
}