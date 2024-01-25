import axios from "axios";

// export default {
//   getLatestRate: async function() {
//     const options = {
//       method: 'GET',
//       url: 'https://exchange-rate-api1.p.rapidapi.com/latest',
//       params: {base: 'usd'},
//       headers: {
//         'X-RapidAPI-Key': 'bf4b921a74msh519a5157c18694bp13de96jsnfbc883463bfe',
//         'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//       return response.data
//     } catch (error) {
//       console.error(error);
//     }
//   },
// };
 
export default {
  getLatestTranslator: async function () {
    const options = {
      method: 'GET',
      url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages',
      headers: {
        'X-RapidAPI-Key': '6f2fe1757dmsh5e166be4bbf928fp16f27djsn4221c0b32636',
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
      'X-RapidAPI-Key': '6f2fe1757dmsh5e166be4bbf928fp16f27djsn4221c0b32636',
      'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  }
}





