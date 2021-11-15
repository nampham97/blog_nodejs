const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const char = new Schema({
    name: { type: String, maxLength: 255, default: 'hahaha' },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('char', char, 'courses');
