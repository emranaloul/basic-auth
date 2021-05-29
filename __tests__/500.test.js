const { app } = require('../src/server');
const superTest = require('supertest');
const request = superTest(app);

describe('server', () => {
  
  it('should get an error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  
  
});