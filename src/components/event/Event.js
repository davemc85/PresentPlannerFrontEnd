import React from 'react';

const Event = ({event}) => {

  if(!event){
    return <p>Events coming soon!.. </p>
  }

  const url = "/events/" + event.id;

  return (
    <div>
      <p> It is {event.person.name}'s {event.eventName} in <b>{event.days}</b> days</p>
    </div>
  )

}

export default Event;
