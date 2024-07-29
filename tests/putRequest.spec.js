const { test, expect, request } = require('@playwright/test');

test('Update pet name', async ({ request }) => {

  const payload = {
    id: 12,
    category: {
      id: 1,
      name: 'DogNameUpdated'
    },
    name: 'Doggy',
    photoUrls: [
      'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg'
    ],
    tags: [
      {
        id: 1,
        name: 'BadDog'
      }
    ],
    status: 'available'
  };

 
  const response = await request.put('https://petstore.swagger.io/v2/pet', {
    data: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  });

 
  expect(response.status()).toBe(200);

  
  const responseBody = await response.json();
  expect(responseBody).toEqual(payload);
  console.log(responseBody)
});
