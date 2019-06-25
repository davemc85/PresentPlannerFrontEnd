import React from 'react';
import Event from './Event';


const CalendarBanner = (props) => {
  
  if (!props.events){
    return(
      <p>Loading events....</p>
    )
  }
  
  let opened = false;
  
  const changeOpened = () => {
    if (opened){
      opened = false;
    } else {
      opened = true;
    }
  }
  
  const eventsList = props.events.slice(0, 6).map((event) => {
    return (
      <li key={event.id}>
      <Event event={event} />
      </li>
    )
  })
  
  if (!opened){
    return(
      <div>
      <ul>
      <li>
      <Event event={props.events[0]} />
      </li>
      </ul>
      <button onClick={changeOpened()}>Expand</button>
      </div>
    )
  }
  
  if (opened){
    return(
      <div>
      <ul>
      {eventsList}
      </ul>
      <button onClick={changeOpened()}>Collapse</button>
      </div>
    )
  }
  
}

export default CalendarBanner;
