const mongoose = require('mongoose');
const Schema = mongoose.Schema
const fullLocationSchema = new Schema({
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipcode: {type: Number}
});

const allAttractionsSchema = new Schema({
    name: {type: String, required: true},
    imageURL: {type: String},
    website: {type: String},
    location: {type: fullLocationSchema},
    cityArea:{type: String},
    familyFriendly:{type: Boolean},
    outdoorAvailability:{type: Boolean},
});

const Attractions = mongoose.model('Attractions', allAttractionsSchema)
module.exports = Attractions