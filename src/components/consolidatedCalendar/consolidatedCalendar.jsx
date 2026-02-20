import React, { useState, useEffect } from 'react';
import BoomCalendar from '../boomCalendar/boomCalendar';
import ScissorsCalendar from '../scissorsCalendar/scissorsCalendar';
import SpiderCalendar from '../spiderCalendar/spiderCalendar';
import MountCalendar from '../mountCalendar/mountCalendar';

// import ConsolidatedCalendar from '../consolidatedCalendar/consolidatedCalendar';
// import Calendar from 'react-calendar';


function ConsolidatedCalendar() {
  const [selectedFleetOption, setSelectedFleetOption] = useState([]);
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  useEffect(()=>{
    document.getElementById("BoomCalendar").style.display="none";
    document.getElementById("ScissorsCalendar").style.display="none";
    document.getElementById("MountCalendar").style.display="none";
    document.getElementById("SpiderCalendar").style.display="none";
  },[])
  const handleFilterChange = (selectedOptions) => {
    setSelectedFleetOption(selectedOptions);
    console.log(selectedOptions);
    if (selectedOptions[0]==="Boom Lift"){
      document.getElementById("BoomCalendar").style.display="";
    }
    if (selectedOptions[0]==="Scissors Lift"){
      document.getElementById("ScissorsCalendar").style.display="";
    }
    if (selectedOptions[0]==="Tracked Spider Lift"){
      document.getElementById("SpiderCalendar").style.display="";
    }
    if (selectedOptions[0]==="Truck Mount Lift"){
      document.getElementById("MountCalendar").style.display="";
    }
  };

  // const handleDateRangeChange = (newDateRange) => {
  //   console.log(newDateRange)
  //   setDateRange(newDateRange);

  // };

  const handleDate = (event) => {
    setDateOne(event.target.value);
  }

  const handleDateTwo = (event) => {
    setDateTwo(event.target.value);
  }

  const getRange = () => {
    const d1 = new Date(dateOne);
    const d2 = new Date(dateTwo);
    const differencesInTime = d2.getTime() - d1.getTime();
    const differenceInDays = Math.round(differencesInTime / (1000 * 3600 * 24));
    console.log("Total number of days between dates:\n" +
      d1.toDateString() + " and " +
      d2.toDateString() +
      " is: " + differenceInDays + " days");
  }
  return (
    <div>
      <h2>Fleet Availability Calendar</h2>
      <div>
        <label>Select Fleet Option:</label>
        <select
          multiple
          value={selectedFleetOption}
          onChange={(e) => {handleFilterChange(Array.from(e.target.selectedOptions, (option) => option.value))
          
          }}>
          <option value="Boom Lift">Boom Lift</option>
          <option value="Scissors Lift">Scissors Lift</option>
          <option value="Tracked Spider Lift">Tracked Spider Lift</option>
          <option value="Truck Mount Lift">Truck Mount Lift</option>
        </select>
      </div>
      <div>
        <label>Date Range:</label>
        <input type="date" value={dateOne} onChange={(e) => handleDate(e)} />
        <input type="date" value={dateTwo} onChange={(e) => handleDateTwo(e)} />
        <button onClick={getRange}> click me</button>
      </div>

      <div className="calendars-container">
        <BoomCalendar />
        <ScissorsCalendar />
        <SpiderCalendar />
        <MountCalendar />
      </div>
    </div>
  );
}

export default ConsolidatedCalendar;
