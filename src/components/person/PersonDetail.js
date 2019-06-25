import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';



const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }

  // const allDates = props.person.dates.map((date, index) => {
  //   return <li key={index}>{date.eventName} { date.eventDate}</li>
  // })
  const allItems = props.person.items.map((item, index) => {
    return <li key={index}>{item.name}{item.price}</li>
  })
  return (
   <div className="person-component">
    <Person person ={props.person}/>
         <ul>
          <p>Gift Ideas:</p>
          <li>
          {allItems}
          </li>
        </ul>
        </div>

 )
}

export default PersonDetail;
