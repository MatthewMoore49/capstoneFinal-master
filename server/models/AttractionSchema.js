import Attractions from '../routes/Attractions';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const attractionSchema = new Schema({
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        imageURL: {
            type: String,
        },
        website: {
            type: String,
        },
        location: {
            type: String,
        }
      });
const Attraction = mongoose.model('Attraction', attractionsSchema);
export default Attractions