const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
// Reference my users information. (This Profile is attached to the users)
 user: {
   // ObjectID means I’m reference another object.
   type: Schema.Types.ObjectId,
   ref: 'users'
 },
 avatar: {
   type: String
 },
 handle: {  // userName
  type: String,  
  required: true,
  max: 30
},
 avatar: {
   type: String
 },
 name: {
   type: String
 },
 website: {
   type: String
 },
 bio: {
   type: String
 },
 followers: {
   type: [String],
   required: true
 },
 status: {
  type: String,
  required: true
},
 company: {
   type: String
 },
 location: {
   type: String
 },
 privateInfo: {
   email: {
     type: String
   },
   phone: {
     type: String
   },
   gender: {
     stype: String
   }
 },
 social: {
  youtube: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  linkedin: {
    type: String
  },
},
 date: { 
   type: Date,
   default: Date.now
 }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

