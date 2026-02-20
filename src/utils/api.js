import axios from "axios";

export default {
  getLatestTranslator: async function () {
    const options = {
      method: 'GET',
      url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response
    } catch (error) {
      console.error(error);
    }

  },

 getTranslator: async function (){
  const encodedParams = new URLSearchParams();
  encodedParams.set('from', 'auto');
  encodedParams.set('to', 'vi');
  encodedParams.set('html', '<ul><li>Hello</li><li>This is Translate HTML endpoint</li></ul>');

  const options = {
    method: 'POST',
    url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/html',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
  }
}
