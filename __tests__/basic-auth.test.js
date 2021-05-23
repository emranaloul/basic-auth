'use strict';
const { app } = require('../src/server');
const superTest = require('supertest');
const request = superTest(app);
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_TEST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, 
async () => {// delete everything from db after tests
  // await mongoose.connection.db.dropDatabase();
});

let id;
describe('api server', () => {
  afterAll(() => {// we need to close the connection after tests
    mongoose.connection.close();
  });

  it('create user using signup', async () => {
    let obj ={
      username: 'emran',
      password: '1234',
    };
    let res = await request.post('/signup').send(obj);
    console.log(res.body);
    expect(res.status).toEqual(201);
    expect(res.body.username).toEqual('emran');
  });

  it('sign in using post', async () => {
    let obj ={
      username: 'emran',
      password: '1234',
    };
    let res = await request.post('/signin').send(obj);
    console.log(res.body);
    expect(res.status).toEqual(200);
    expect(res.body.username).toEqual('emran');
  });

});