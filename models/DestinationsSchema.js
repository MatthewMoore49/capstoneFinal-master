const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const destinationSchema = new Schema({
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
const Destination = mongoose.model('Destination', destinationSchema);
export default Destination