import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';



const PersonDeatil = (props) => {
  if(!props.person){
    return <p>Loading PersonDeatil Information....</p>
  }

  const allDates = props.person.dates.map((date, index) => {
    return <li key={index}>{date.eventName} { date.eventDate}</li>
  })
  const allItems = props.person.items.map((item, index) => {
    return <li key={index}>{item.name}{item.price}</li>
  })
  return (
  <div>
    <Person person ={props.person}/>
     <p>EventDates :</p>
        <ul>
        <li>
          {allDates}
          </li>
          <p>Gift Ideas:</p>
          <li>
          {allItems}
          </li>
        </ul>
   </div>
 )
}

export default PersonDeatil;
