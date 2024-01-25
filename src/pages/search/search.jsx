import React, {useEffect, useState}from 'react';
import ConsolidatedCalendar from '../../components/consolidatedCalendar/consolidatedCalendar';
import Api from '../../utils/api';
// import ReactDOMServer from 'react-dom/server'
// import ContactUs from '../../pages/contactUs'



function Search() {
  const [translator, setTranslator] = useState([])
  const [language, setLanguage] = useState('en'); 
  useEffect(()=>{
   const getApi = async () => {
    const data = await Api.getLatestTranslator()
    console.log(data.data)
    console.log(data)
    setTranslator(data.data)
    // const htmlString = ReactDOMServer.renderToString(<ContactUs/>)
   }
   getApi()
 
  },[language])
  return (
    <div>
      <h1>Search & Hire</h1>
      <ConsolidatedCalendar />
    </div>
  );
}

export default Search;
