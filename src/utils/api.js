import axios from "axios";

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
};




