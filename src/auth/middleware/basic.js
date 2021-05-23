'use strict';
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const Users = require('../models/users-model');
// const isAuthenticated = require('../models/users-model');


module.exports = async ( req,res,next ) =>{
    
  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password
  
  try {
    const user = await Users.findOne({ username: username });
    console.log('emran2',user);
    const valid = await bcrypt.compare(password, user.password);
    // const valid = await user.isAuthenticated(password);
    if (valid) {
      req.user = user;
      next();
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login');
    next(error);
  }
  
};



