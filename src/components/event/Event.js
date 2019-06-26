import React from 'react';

const Event = ({event}) => {

  if(!event){
    return <p>Events coming soon!.. </p>
  }

  const url = "/events/" + event.id;
  
  const getDays = () => {
    if (!event.days){
      let today = new Date();
      let specialDay = new Date(event.eventDate);
      if (specialDay.getYear() < today.getYear()){
        specialDay.setFullYear(1201);
        today.setFullYear(1200);
      } else {
        specialDay.setFullYear(1200);
        today.setFullYear(1200);
      }
      if (specialDay.getDate() > today.getDate()){
        const diffTime = Math.abs(specialDay.getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      } else {
        const diffTime = Math.abs(today.getTime() - specialDay.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      }
    } else {
      return event.days
    }
  }

  return (
    <div>
      <p> It is {event.person.name}'s {event.eventName} in <b>{getDays()}</b> days</p>
    </div>
  )

}

export default Event;
