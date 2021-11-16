const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const char = new Schema(
    {
        name: { type: String, maxLength: 255, default: 'hahaha' },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        position: { type: String, maxLength: 255 },
        height: { type: Number, maxLength: 255 },
        team: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
    },
    { timestamps: true },
);

module.exports = mongoose.model('char', char, 'Character');
