import React from 'react';
import Person from './Person';
import CalendarBanner from '../event/CalendarBanner';

const PersonList = (props) => {
  console.log(props.events);
  if(!props.persons){
    return(
      <p>Loading person list....</p>
    )
  }
  
  const allPersons = props.persons.map((person) => {
    return (
      <div>
      <li key={person.id} className="component-person">
      <Person person={person}/>
      </li>
      </div>
    )
  })
  return(
    <div>
    <CalendarBanner events={props.events}/>
    <ul className="component-list">
    {allPersons}
    </ul>
    </div>
  )
}
export default PersonList;
