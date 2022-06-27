const mongoose = require('mongoose');

const model = mongoose.Schema({
    userName: String,
    password: String,
    isActive: Boolean,
});

module.exports = mongoose.model('User', model);
