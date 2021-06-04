import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
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
        },
        // likeCount: {
        //     type: Number,
        //     default: 0
        // },
        // createdAt: {
        //     type: Date,
        //     default: new Date()
        // },
      });
   
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;