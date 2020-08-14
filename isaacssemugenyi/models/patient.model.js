const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    surname: String,
    givenname: String,
    dateOfBirth: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String
})

module.exports = mongoose.model('patient', patientSchema)