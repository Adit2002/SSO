const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SSO = new Schema({
    email: String,
    name: String,
    contact_number: Number,
    address: String
});

module.exports = model('SSO_1', SSO);