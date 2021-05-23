const bcrypt = require('bcrypt');
const app = require('../../server');
const base64 = require('base-64');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model('users', usersSchema);

// usersSchema.pre('save',  async function(next) {
//   let encryptedPassword = await bcrypt.hash(this.password, 10);
//   this.password = encryptedPassword;
//   next();
// });

// usersSchema.methods.isAuthenticated = function(password){
//   return bcrypt.compare(password,this.password);
// };

module.exports = Users;
