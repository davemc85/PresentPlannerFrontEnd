import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';
import Item from '../item/Item';
import PersonSideNav from './PersonSideNav';
import Event from '../event/Event';


const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }
  const handleDeleteClick = () => {
    props.onDelete(props.event.id);
  }

  const getStar = (star) => {
    if (star){
      return <img src="../../public/Starred.png"/>
    } else {
      return <img src="../../public/noStar.png"/>
    }
  }

  const allDates = props.person.dates.map((date, index) => {
    const eventDate = new Date(date.eventDate);
    const day = eventDate.getDate();
    const month = eventDate.getMonth();
    switch(month){
      case 0:
      return <li key={index}>{date.eventName} on January {day}
            <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 1:
      return <li key={index}>{date.eventName} on February {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 2:
      return <li key={index}>{date.eventName} on March {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 3:
      return <li key={index}>{date.eventName} on April {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 4:
      return <li key={index}>{date.eventName} on May {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 5:
      return <li key={index}>{date.eventName} on June {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 6:
      return <li key={index}>{date.eventName} on July {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 7:
      return <li key={index}>{date.eventName} on August {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 8:
      return <li key={index}>{date.eventName} on September {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 9:
      return <li key={index}>{date.eventName} on October {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 10:
      return <li key={index}>{date.eventName} on November {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      case 11:
      return <li key={index}>{date.eventName} on December {day}
          <button onClick={handleDeleteClick}>Delete Event</button></li>
      break;
      default:
      return <li key={index}>{date.eventName} on {date.eventDate}
      <button onClick={handleDeleteClick}>Delete Event</button></li>
    }
  })

  const allItems = props.person.items.map((item, index) => {
    return (
      <div>
      <tr>
      <th>Item</th>
      <th>Type</th>
      <th>Price</th>
      <th>Starred</th>
      <th>Bought</th>
      </tr>
      <hr/>
      <tr>
      <a href={"/items/" + item.id}><td>{item.name}</td></a>
      <td>{item.description}</td>
      <td>£{item.price}</td>
      <td>{getStar(item.starItem)}</td>
      <td><input type="checkbox"/></td>
      </tr>
      </div>
    )
  })



  const editUrl = "/persons/edit/" + props.person.id;

  return (
    <div className="person-detail">
    <div className="name-text">
    <Person person ={props.person}/>
    </div>
    <ul className="person-events">
    <li>
    {allDates}
    </li>
    </ul>
    <p className="list-heading">Gift Ideas:</p>
    <table className="person-items">
    {allItems}
    </table>
    </div>
  )
}

export default PersonDetail;
