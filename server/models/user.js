const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { 
    type: String, 
    required: [true, "name is required"]
  },
  email: { 
    type: String, 
    required: [true, "email is required"],
    unique: true
  },
  password: { 
    type: String, 
    required: [true, "password is required"] 
  }
},{
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;

