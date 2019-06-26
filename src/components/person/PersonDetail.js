import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';
import Item from '../item/Item';
import PersonSideNav from './PersonSideNav';
import Event from '../event/Event';
import EventDetail from '../event/EventDetail';


const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }


  const getStar = (star) => {
    if (star){
      return <img src="../../../public/Starred.png"/>
    } else {
      return <img src="../../../public/noStar.png"/>
    }
  }

  const allDates = props.person.dates.map((date, index) => {
    const eventDate = new Date(date.eventDate);
    const day = eventDate.getDate();
    const month = eventDate.getMonth();
    switch(month){
      case 0:
      return <li className="individual-event" key={index}>{date.eventName} on <p>January {day}</p>
            <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 1:
      return <li className="individual-event" key={index}>{date.eventName} on <p>February {day}</p>
            <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 2:
      return <li className="individual-event" key={index}>{date.eventName} on <p>March {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 3:
      return <li className="individual-event" key={index}>{date.eventName} on <p>April {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 4:
      return <li className="individual-event" key={index}>{date.eventName} on <p>May {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 5:
      return <li className="individual-event" key={index}>{date.eventName} on <p>June {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 6:
      return <li className="individual-event" key={index}>{date.eventName} on <p>July {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 7:
      return <li className="individual-event" key={index}>{date.eventName} on <p>August {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 8:
      return <li className="individual-event" key={index}>{date.eventName} on <p>September {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 9:
      return <li className="individual-event" key={index}>{date.eventName} on <p>October {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 10:
      return <li className="individual-event" key={index}>{date.eventName} on <p>November {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      case 11:
      return <li className="individual-event" key={index}>{date.eventName} on <p>December {day}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
      break;
      default:
      return <li className="individual-event" key={index}>{date.eventName} on <p>{date.eventDate}</p>
          <p><a href={"/events/" + date.id}>View Event</a></p></li>
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
    {allDates}
    </ul>
    <p className="list-heading">Gift Ideas:</p>
    <table className="person-items">
    {allItems}
    </table>
    </div>
  )
}

export default PersonDetail;
