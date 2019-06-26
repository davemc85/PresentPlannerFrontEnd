import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';
import Item from '../item/Item';
import PersonSideNav from './PersonSideNav';
import Event from '../event/Event';
import EventDetail from '../event/EventDetail';
import logo from '../Starred.png';
import logo2 from '../noStar.png';


const PersonDetail = (props) => {
  if(!props.person){
    return <p>Loading PersonDetail Information....</p>
  }


  const getStar = (star) => {
    if (star){
      return <img src={logo} />
    } else {
      return <img src={logo2} />
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
      <table>
      <tr>
        <td><a href={"/items/" + item.id}>{item.name}</a></td>
        <td>{item.description}</td>
        <td>£{item.price}</td>
        <td>{getStar(item.starItem)}</td>
        <td><input type="checkbox"/></td>
      </tr>
      <hr/>
      </table>
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
      <tr>
        {allItems}
      </tr>
    </table>
    </div>
  )
}

export default PersonDetail;
