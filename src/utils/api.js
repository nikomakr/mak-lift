import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getLatestRate: async function() {
    const options = {
      method: 'GET',
      url: 'https://exchange-rate-api1.p.rapidapi.com/latest',
      params: {base: 'usd'},
      headers: {
        'X-RapidAPI-Key': 'bf4b921a74msh519a5157c18694bp13de96jsnfbc883463bfe',
        'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};




