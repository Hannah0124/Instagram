
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
 user: {
   type: Schema.Types.ObjectId,
   ref: 'users'
 },
 photo: {   // added 
   type: String,
   required: true
 },
 text: {
   type: String // text is not required
 },
//  tag: [  // added
//    {
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: 'users'
//     }
//    }
//  ],
 tags: {  // edited
     type: [String]
 },
 location: {  // added
   type: String
 },
 name: {
   type: String
 },
 avatar: {
   type: String
 },
 social: {  // added
   facebook: {
     type: Boolean,
     default: false
   },
   twitter: {
     type: Boolean,
     default: false
   },
   tumblr: {
     type: Boolean,
     default: false
   }
 },
 likes: [
   {
     user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
     }
   }
 ],
 comments: [
   {
     user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
     },
     text: {
       type: String,
       required: true
     },
     name: {
       type: String
     },
     avatar: {
       type: String
     },
     date: {
       type: Date,
       default: Date.now
     }
   }
 ],
 date: {
   type: Date,
   default: Date.now
 }
});

module.exports = Post = mongoose.model('post', PostSchema);
