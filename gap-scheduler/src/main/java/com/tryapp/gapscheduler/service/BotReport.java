package com.tryapp.gapscheduler.service;

import org.springframework.stereotype.Component;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.request.ParseMode;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.response.SendResponse;
import com.tryapp.gapscheduler.domain.Summary;

@Component
public class BotReport {
    private String Token = "y6899482325:AAH73p2qdQn9f69QqC4ode23WzqeEPzQfg8"; //ganti sesuai bot
    private Integer Id_User = 1337645629; // ganti sesuai bot
    private SummaryLokoService  summaryLokoService;

    public BotReport(SummaryLokoService  summaryLokoService) {
        this.summaryLokoService = summaryLokoService;
    }

    public void sendData(){
        Summary data = summaryLokoService.getNewData();
    }

    public void messageTelegram(Summary data){
        TelegramBot bot = new TelegramBot(Token);
        String message = "Data: " + data.getDateTime()  
        + "Total Keseluruhan: " + data.getTotalLokomotif() 
        + "Total Lokomotif dengan Status Good: "+ data.getTotalGood()
        + "Total Lokomotif dengan Status Excellent: "+ data.getTotalExcellent()
        + "Total Lokomotif dengan Status Poor: "+ data.getTotalPoor();
    
        SendMessage request = new SendMessage(Id_User, message).parseMode(ParseMode.Markdown);
        SendResponse response = bot.execute(request);

        if(!response.isOk()){
            System.out.printf("Pesan Gagal dengan respon: {} ", response.description());
        }
    }
}
