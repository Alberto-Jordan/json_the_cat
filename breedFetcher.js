const request = require('request');

const breedFetcherURL = 'https://api.thecatapi.com/v1/breeds/search.'; // Replace with the actual API endpoint URL

request(breedFetcherURL, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    try {
      const data = JSON.parse(body);
      if (Array.isArray(data) && data.length > 0) {
        const siberianBreed = data[0];
        if (siberianBreed.description) {
          console.log('Description:', siberianBreed.description);
        } else {
          console.log('Description not found for the Siberian breed.');
        }
      } else {
        console.log('No breed data available.');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
});
