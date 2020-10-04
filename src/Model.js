const mongoose = require('mongoose');

const schema = mongoose.Schema;

const login = new schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('login', login);