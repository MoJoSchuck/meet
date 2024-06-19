import React from 'react';
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{formatDate(event.start.dateTime)}</p>
      {showDetails &&
        <p className="details">{event.description}</p>
      }
      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide details' : 'show details'}
      </button>
    </li>
  );
}

export default Event;
