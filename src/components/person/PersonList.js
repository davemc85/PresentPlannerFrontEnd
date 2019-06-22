import React from 'react';
import Person from './person';

const PersonList = (props) => {
  if(!props.person.length === 0){
    return(
      <p>Loading person list....<p/>
    )
  }

  const allPersons = props.persons.map((person)=>{
    return (
      <li key={person.id} className="copmonent-person">
      <div className="component">
        <Person person={person}/>
      </div>
    </li>
    )
  })
    return(
    <ul className="component-list">
      {allPersons}
    </ul>

    )
}
export default PersonList;
