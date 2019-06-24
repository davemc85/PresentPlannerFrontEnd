import React from 'react';
import Person from './Person';
import CalendarBanner from '../event/CalendarBanner';

const PersonList = (props) => {
  if(props.person.length === 0){
    return(
      <p>Loading person list....</p>
    )
  }

  const allPersons = props.persons.map((person) => {
    return (
      <div>
      <CalendarBanner />
      <li key={person.id} className="component-person">
      <div className="component">
        <Person person={person}/>
      </div>
    </li>
    </div>
    )
  })
    return(
    <ul className="component-list">
      {allPersons}
    </ul>

    )
}
export default PersonList;
