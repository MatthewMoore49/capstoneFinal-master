const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const contactSchema = new Schema({
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        message: {
            type: String,
        }
     
        
 
      });
const Contact = mongoose.model('Contact', contactSchema);
export default Contact