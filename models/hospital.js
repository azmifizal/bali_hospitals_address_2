const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        min: 10
    },
    districts: {
        type: String,
        required: true
    },
    postal_code: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        required: true
    }
});

const HospitalSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
        min: 10
    },
    type: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    location: LocationSchema,
    last_update: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Hospital', HospitalSchema);