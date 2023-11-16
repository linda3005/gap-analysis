// kafkaHelper.js
const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const createKafkaProducer = async () => {
  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
  });
  await producer.connect();
  return producer;
};

const createKafkaConsumer = async (groupId, topic, eachMessageCallback) => {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: eachMessageCallback
  });
  return consumer;
};

module.exports = { createKafkaProducer, createKafkaConsumer };
