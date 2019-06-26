import React from 'react';
import {Link} from 'react-router-dom';
import Event from './Event';

const EventDetail = (props) => {
  if(!props.event){
    return <p>Event detail coming soon...</p>
  }

  const handleDeleteClick = () => {
    props.onDelete(props.event.id);
  }
  
  const getEventDate = () => {
    const eventDate = new Date(props.event.eventDate);
    const day = eventDate.getDate();
    const month = eventDate.getMonth();
    switch(month){
      case 0:
      return "January " + day
      break;
      case 1:
      return "February " + day
      break;
      case 2:
      return "March " + day
      break;
      case 3:
      return "April " + day
      break;
      case 4:
      return "May " + day
      break;
      case 5:
      return "June " + day
      break;
      case 6:
      return "July " + day
      break;
      case 7:
      return "August " + day
      break;
      case 8:
      return "September " + day
      break;
      case 9:
      return "October " + day
      break;
      case 10:
      return "November " + day
      break;
      case 11:
      return "December " + day
      break;
      default:
      return eventDate
    }
  }
  


  return(
    <div className="event-component">
      <Event event={props.event}/>
      <p>on {getEventDate()}</p>
      <button onClick={handleDeleteClick}>Delete Event</button>

    </div>
  )
}

export default EventDetail;
