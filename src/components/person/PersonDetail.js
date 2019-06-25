import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';



const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }
  const handleDeleteClick = () => {
    props.onDelete(props.person.id);
  }

  // const allDates = props.person.dates.map((date, index) => {
  //   return <li key={index}>{date.eventName} { date.eventDate}</li>
  // })
  const allItems = props.person.items.map((item, index) => {
    return <li key={index}>{item.name}{item.price}</li>
  })

  const editUrl = "/persons/edit/" + props.person.id;

  return (
   <div className="person-component">
    <Person person ={props.person}/>
         <ul>
          <p>Gift Ideas:</p>
          {allItems}
        </ul>
        <button onClick={handleDeleteClick}>Delete Person</button>
        <Link to= {editUrl}><button type="button">Edit {props.person.name}</button></Link>
        </div>

 )
}

export default PersonDetail;
