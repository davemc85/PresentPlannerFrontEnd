import React from 'react';
import Event from './Event.js';

const EventList = (props) => {

  if(!props.events){
    return (
      <p>Loading event list...</p>
    )
  }

  const allEvents = props.events.map((event) => {
    return (
      <li key={event.id} className="component-item">
        <div className="component">
          <Event event={event}/>
        </div>
      </li>
    )
  })

  return(
    <ul className="component-list">
      {allEvents}
    </ul>
  )

}

export default EventList;
