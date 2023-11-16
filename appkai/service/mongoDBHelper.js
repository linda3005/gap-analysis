const mongoose = require('mongoose');
const schema = require('../model/locomotifModel'); // Adjust the relative path
require('../configuration/database');


const saveDataToMongoDB = async (receiveData) => {
  try {
    console.log('Data received from Kafka:', receiveData);
    const Order = mongoose.model('locomotive', schema);

    const order = new Order({
      kodeLoko: receiveData.kodeLoko,
      namaLoko: receiveData.namaLoko,
      dimensiLoko: receiveData.dimensiLoko,
      status: receiveData.status,
      tanggal: receiveData.tanggal,
      jam: receiveData.jam
    });

    return await order.save();
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    throw error;
  }
};

module.exports = { saveDataToMongoDB };
