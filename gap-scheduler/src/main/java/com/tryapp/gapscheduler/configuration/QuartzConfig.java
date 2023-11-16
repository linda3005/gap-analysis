package com.tryapp.gapscheduler.configuration;

import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.tryapp.gapscheduler.jobs.LokomotifJob;

@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail lokomotifJobDetail() {
        return JobBuilder.newJob(LokomotifJob.class)
                .withIdentity("lokomotifJob")
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger lokomotifJobTrigger(JobDetail lokomotifJobDetail) {
        return TriggerBuilder.newTrigger()
                .forJob(lokomotifJobDetail)
                .withIdentity("lokomotifTrigger")
                .withSchedule(SimpleScheduleBuilder.simpleSchedule().withIntervalInSeconds(10).repeatForever())
                .build();
    }
}
