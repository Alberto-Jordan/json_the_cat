const request = require('request');

function fetchBreedDescription(breedName, callback) {
  const breedFetcherURL = 'https://api.thecatapi.com/v1/breeds/search'; 

  request(breedFetcherURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        const breed = data.find((entry) => entry.name.toLowerCase() === breedName.toLowerCase());
        if (breed && breed.description) {
          callback(null, breed.description);
        } else {
          callback(`Description not found for breed: ${breedName}`, null);
        }
      } catch (error) {
        callback(`Error parsing JSON: ${error}`, null);
      }
    }
  });
}

module.exports = fetchBreedDescription;
