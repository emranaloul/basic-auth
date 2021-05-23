'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const notFoundHndler = require('./middleware/404');
const errorHandler = require('./middleware/500'); 
const rounter = require('./routes');


// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
// app.use(express.data({ extended: true }));

app.use('/', rounter);
app.use('*', notFoundHndler);
app.use(errorHandler);

/**
 * start 
 * @param {number} port to specify the port number
 */
function start( port ){
  app.listen( port, ()=>{
    console.log( `litening on PORT ${port}` );
  } );
}


module.exports = {
  app: app,
  start: start,
};