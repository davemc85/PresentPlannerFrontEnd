import React from 'react';
import Person from './Person';
import{Link} from 'react-router-dom';

const PersonDeatil = (props)=> {
  if(!props.person){
    return <p>Loading PersonDeatil Information....</p>
  }

  const allDates = props.person.dates.map((date, index) => {
    return <li key={index}>{date.name}</li>
  })
  return (
  <div className="component">
    <Person person={props.person}/>

     <p>EventDates :</p>
        <ul>
          {allDates}
        </ul>
   </div>
 )
}

export default PersonDeatil;
