import React, { useState } from 'react';
import boomCalendar from './boomCalendar';
import scissorsCalendar from './scissorsCalendar';
import spiderCalendar from './spiderCalendar';
import mountCalendar from './mountCalendar';

function consolidatedCalendar() {
  const [selectedFleetOption, setSelectedFleetOption] = useState([]);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const handleFilterChange = (selectedOptions) => {
    setSelectedFleet(selectedOptions);
  };

  const handleDateRangeChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <div>
      <h2>Fleet Availability Calendar</h2>
      <div>
        <label>Select Fleet:</label>
        <select
          multiple
          value={selectedFleet}
          onChange={(e) => handleFilterChange(Array.from(e.target.selectedOptions, (option) => option.value))}
        >
          <option value="Boom Lift">Boom Lift</option>
          <option value="Scissors Lift">Scissors Lift</option>
          <option value="Tracked Spider Lift">Tracked Spider Lift</option>
          <option value="Truck Mount Lift">Truck Mount Lift</option>
        </select>
      </div>
      <div>
        <label>Date Range:</label>
        <input type="date" value={dateRange[0]} onChange={(e) => handleDateRangeChange([new Date(e.target.value), dateRange[1]])} />
        <input type="date" value={dateRange[1]} onChange={(e) => handleDateRangeChange([dateRange[0], new Date(e.target.value)])} />
      </div>

      <div className="calendars-container">
        <boomCalendar />
        <scissorsCalendar />
        <spiderCalendar />
        <mountCalendar />
      </div>
    </div>
  );
}

export default consolidatedCalendar;
