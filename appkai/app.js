// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { createKafkaProducer, createKafkaConsumer } = require('./service/kafkaHelper');
const { saveDataToMongoDB } = require('./service/mongoDBHelper');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Kafka Consumer
const runKafkaConsumer = async () => {
  const groupId = 'loco-group';
  const topic = 'loco-data';

  try {
    const consumer = await createKafkaConsumer(groupId, topic, async ({ message }) => {
      try {
        const receiveData = JSON.parse(message.value.toString());
        console.log('Data received from Kafka:', receiveData);

        await saveDataToMongoDB(receiveData);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });

    console.log(`Consumer for topic ${topic} started successfully.`);
  } catch (error) {
    console.error('Error creating or starting Kafka consumer:', error);
  }
};

// Kafka Producer
const runKafkaProducer = async (receiveData) => {
  try {
    const producer = await createKafkaProducer();

    await producer.send({
      topic: 'loco-data',
      messages: [{ value: JSON.stringify(receiveData) }]
    });

    console.log('Message successfully sent to Kafka:', receiveData);
  } catch (error) {
    console.error('Failed to send message to Kafka:', error);
    throw error;
  }
};

// Route to handle incoming data
app.post('/receive-data', async (req, res) => {
  const receiveData = req.body;
  console.log('Received data:', receiveData);

  try {
    await runKafkaProducer(receiveData);
    res.status(200).json({ message: 'Message successfully sent to Kafka' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message to Kafka' });
  }
});

runKafkaConsumer(); // Run Kafka consumer when the app starts

module.exports = app; // Export the app instance
