import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';
import PersonSideNav from './PersonSideNav';
import Event from '../event/Event';


const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }
  const handleDeleteClick = () => {
    props.onDelete(props.person.id);
  }

  const allDates = props.person.dates.map((date, index) => {
    return <li key={index}>{date.eventName} { date.eventDate}</li>
  })
  const allItems = props.person.items.map((item, index) => {
    return <li key={index}> {item.name} Price:£{item.price}</li>
  })



  const editUrl = "/persons/edit/" + props.person.id;

  return (
   <div className="person-component">
   <PersonSideNav/>
    <Person person ={props.person}/>
      <p>List Of Gift Ideas for  {props.person.name}</p>
         <li>
          {allDates}
        </li>
        <li>
        {allItems}
        </li>
        <button onClick={handleDeleteClick}>Delete Person</button>
        <Link to= {editUrl}><button type="button"> Edit Person </button></Link>
        </div>

 )


}

export default PersonDetail;
