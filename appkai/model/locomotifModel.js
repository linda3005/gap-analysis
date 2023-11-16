const { mongoose } = require('mongoose');

const schema = mongoose.Schema({
    kodeLoko: String,
    namaLoko: String,
    dimensiLoko: String,
    status: String,
    tanggal: String,
    jam: String
})

module.exports= schema
