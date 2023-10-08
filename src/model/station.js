const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true 
    },
    title: String,
    description: String,
    latitude: String,
    longitude: String, 
    status: ['free', 'occupied']
});

module.exports = mongoose.model('Station', schema);