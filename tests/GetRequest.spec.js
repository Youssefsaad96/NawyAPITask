const { test, expect, request } = require('@playwright/test');


test('get a pet with ID 12 successfully', async ({ request }) => {

  const petId = 12;


  const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  
  expect(response.status()).toBe(200);

  const getResponse = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  
  expect(getResponse.status()).toBe(200); 
});
