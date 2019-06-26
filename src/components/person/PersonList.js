import React from 'react';
import Person from './Person';
import CalendarBanner from '../event/CalendarBanner';

const PersonList = (props) => {
  if(props.persons.length === 0){
    return (
      <p>Loading person list....</p>
    )
  }


  const allPersons = props.persons.map((person) => {
    return (
      <li key={person.id} className="component-person">
      <div className="name">
      <Person person={person} />
      </div>
      </li>
    )
  })
  return(
    <div name="personlist">
    <CalendarBanner events={props.events} />
    <h2>List Of Persons</h2>
    <ul className="component-list">
    {allPersons}
    </ul>
    </div>
  )
}
export default PersonList;
