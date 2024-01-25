import React, {useEffect, useState}from 'react';
import ConsolidatedCalendar from '../../components/consolidatedCalendar/consolidatedCalendar';
import Api from '../../utils/api';


function Search() {
  const [translator, setTranslator] = useState([])
  useEffect(()=>{
 const data = Api.getLatestTranslator()
 console.log(data)
 setTranslator(data)
  },[])
  return (
    <div>
      <h1>Search & Hire</h1>
      <ConsolidatedCalendar />
    </div>
  );
}

export default Search;
