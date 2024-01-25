import React, { useState } from 'react';
import Calendar from 'react-calendar';

function BoomCalendar() {

  return (
    <div id="BoomCalendar">
      <h3 className='text-center'>Boom Lift Calendar</h3>
      <Calendar />
    </div>
  );
}

export default BoomCalendar;