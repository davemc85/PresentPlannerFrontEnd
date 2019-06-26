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
      <Event event={props.event}/>
      <p>{props.eventDate}</p>
      <button onClick={handleDeleteClick}>Delete Event</button>

    </div>
  )
}
export default EventDetail;
