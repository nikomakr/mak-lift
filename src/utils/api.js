import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getLatestRate: function() {
    return axios.get("https://exchange-rate-api1.p.rapidapi.com/latest");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
