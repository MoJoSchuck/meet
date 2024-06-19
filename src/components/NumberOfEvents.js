// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        id="number-of-events-input"
        type="number"
        value={numberOfEvents}
        onChange={(e) => setNumberOfEvents(Number(e.target.value))}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;
