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
    senha_auth: {
        type: String,
        required: true,
        trim: true
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Login', login);