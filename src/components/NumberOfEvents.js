// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);
    setNumberOfEvents(value);
    setCurrentNOE(value); // Props verwenden
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        id="number-of-events-input"
        type="number"
        value={numberOfEvents}
        onChange={handleInputChanged}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;
