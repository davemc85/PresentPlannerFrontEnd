import React, {useState} from 'react';
import Event from './Event';


const CalendarBanner = (props) => {
  
  const [opened, setOpened] = useState(false)
  
  
  if (!props.events){
    return(
      <p>Loading events....</p>
    )
  }
  
  const changeOpened = () => {
    if (opened){
      setOpened(false);
    } else {
      setOpened(true);
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
      <button onClick={() => {changeOpened()}}>Expand</button>
      </div>
    )
  }
  
  if (opened){
    return(
      <div>
      <ul>
      {eventsList}
      </ul>
      <button onClick={() => {changeOpened()}}>Collapse</button>
      </div>
    )
  }
  
}

export default CalendarBanner;
