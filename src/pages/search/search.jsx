import React, {useEffect, useState}from 'react';
import ConsolidatedCalendar from '../../components/consolidatedCalendar/consolidatedCalendar';
import Api from '../../utils/api';


function Search() {
  const [rate, setRate] = useState([])
  useEffect(()=>{
 const data = Api.getLatestRate()
 console.log(data)
 setRate(data)
  },[])
  return (
    <div>
      <h1>Search & Hire</h1>
      <ConsolidatedCalendar />
    </div>
  );
}

export default Search;
