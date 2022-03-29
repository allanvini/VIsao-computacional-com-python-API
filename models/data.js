const { Schema, model } = require('mongoose');

const data = new Schema({
    time: {
        day: Number,
        month: Number,
        year: Number,
        hours: Number,
        minutes: Number
    },
    vehichleCount: Number
});

module.exports = model('data', data);
