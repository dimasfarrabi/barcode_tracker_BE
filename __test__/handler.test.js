const axios = require('axios');

const url = 'http://localhost:8080';

describe('The router', () => {
    test('The login route with the user', async () => {
      const res = await axios.post(`${url}/api/v1/auth`, {
        nik: 'PI0123.1620',
        password: 'Dickyfarrabi074'
      })
      expect(res.status).toBe(200);
    });

    test('The login route with the wrong user', async () => {
      try {
        await axios.post(`${url}/api/v1/auth`, {
          nik: 'john@email.com',
          password: 'john123'
        })
            
      } catch (error) {
        expect(error.response.status).toBe(200)
        expect(error.message).toEqual(
          'Account Not Found'
        )
      }
    })
  })