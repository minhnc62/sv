const mongoose = require('mongoose');
const { text } = require('express');

const trainerSchema = new mongoose.Schema({
    nameTrainer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ngaysinh: {
        type: Date,
        required: true
    },
    msv: {
        type: String
    },

    
    avatar: {
        type: String
    }
});

module.exports = mongoose.model('TrainerModel', trainerSchema);