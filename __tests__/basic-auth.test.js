'use strict';
const { app } = require('../src/server');
const superTest = require('supertest');
const request = superTest(app);
const mongoose = require('mongoose');
require('dotenv').config();
const {req,res,next} = require('express');


mongoose.connect(process.env.MONGOOSE_TEST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, 
async () => {// delete everything from db after tests
  // await mongoose.connection.db.dropDatabase();
});

describe('api server', () => {
  afterAll(() => {// we need to close the connection after tests
    mongoose.connection.close();
  });

  it('create user using signup', async () => {
    let obj ={
      username: 'emran',
      password: '1234',
    };
    let res = await request.post('/api/v1/signup').send(obj);
    console.log(res.body);
    expect(res.status).toEqual(201);
    expect(res.body.username).toEqual('emran');
    // expect(base64.decode(res.body.password)).toEqual('1234');
    
  });

  it('POST to / signin to login as a user(use basic auth)', async () => {
    //arrange
    let user = {
      username: 'emran',
      password: '1234',
    };
    //act
    const response = await request.post('/api/v1/signin').auth(user.username,user.password);
    console.log('user data: ', response.body);
    //assert
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('emran');
  });

  it('POST to / signin to login as a user(use basic auth)', async () => {
    //arrange
    let user = {
      username: 'emran',
      password: '1234',
    };
    //act
    const response = await request.post('/api/v1/signin').auth(user.username,user.password);
    console.log('user data headers: ', req);
    //assert
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('emran');
  });

});