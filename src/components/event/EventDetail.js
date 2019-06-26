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


  return(
    <div className="item-component">

      <p>{props.event.eventDate}</p>
      <p>{props.event.person.name}'s {props.event.eventName}</p>

      <button onClick={handleDeleteClick}>Delete Event</button>

    </div>
  )
}
export default EventDetail;
