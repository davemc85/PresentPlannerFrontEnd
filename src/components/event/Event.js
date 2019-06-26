import React from 'react';
import {Link} from 'react-router-dom';

const Event = ({event}) => {

  if(!event){
    return <p>Events coming soon!.. </p>
  }

  const url = "/events/" + event.id;

  return (
    <React.Fragment>
      <Link to={url} className="event_name">
        {event.eventName}
      </Link>
        <p>{event.person.name}</p>
        <p>{event.eventDate}</p>
    </React.Fragment>
  )

}

export default Event;
