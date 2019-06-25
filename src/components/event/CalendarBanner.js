import React from 'react';


const CalendarBanner = (props) => {
  console.log(props.events);
  if (!props.events){
    return(
      <p>Loading events...</p>
    )
  }
  
  const getFirstEventsTimeFrame = () => {
    const eventDate = props.events[0].eventDate;
    const date = new Date();
    
    const days = Math.floor((Date.UTC(date.getMonth(), date.getDate()) - Date.UTC(eventDate.getMonth(), eventDate.getDate())) /(1000 * 60 * 60 * 24))
    return days;
  }
  
  
  return(
    <div>
    <p>It is {props.events[0].person.name}'s {props.events[0].eventName} in {props.events[0].days} days</p>
    </div>
  )
  
}

export default CalendarBanner;
