const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Users = require('./auth/models/users-model');
const authorization = require('./auth/middleware/basic');
const multer = require('multer');
const upload = multer();

router.post('/signup', upload.none() , async (req, res) => {
  console.log('inside signup', req.body);
  try { 
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});
    
    

router.post('/signin', authorization , async (req, res) => {
    
  try {
    const user = await Users.findOne({ username: req.user.username });
    // const valid = await bcrypt.compare(req.user.password, req.user.password);
    if (req.user) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }
    
});
  
module.exports = router;
    