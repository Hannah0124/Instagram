const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
// Reference my users information. (This Profile is attached to the users)
 user: {
   // ObjectID means I’m reference another object.
   type: Schema.Types.ObjectId,
   ref: 'users'
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
 date: { 
   type: Date,
   default: Date.now
 }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

