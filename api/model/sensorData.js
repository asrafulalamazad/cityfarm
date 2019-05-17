const mongoose = require('mongoose');

const sensordataSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now
    },
    humidity: {
        type: String,
        require: true
    },
    temperature:{
        type: String,
        require: true
    },
    moisture:{
        type: String,
        require: true
    },
});

module.exports = mongoose.model('SensorData',sensordataSchema)
