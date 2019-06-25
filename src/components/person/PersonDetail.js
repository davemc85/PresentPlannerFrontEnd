import React from 'react';
import {Link} from 'react-router-dom';
import Person from './Person';



const PersonDeatil = (props) => {
  if(!props.person){
    return <p>Loading PersonDeatil Information....</p>
  }
  
  const getStar = (star) => {
    if (star){
      return <img src="../../public/Starred.png"/>
    } else {
      return <img src="../../public/noStar.png"/>
    }
  }
  
  const allDates = props.person.dates.map((date, index) => {
    return <li key={index}>{date.eventName} on { date.eventDate}</li>
  })
  const allItems = props.person.items.map((item, index) => {
    return (
      <div>
      <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Starred</th>
      <th>Bought</th>
      </tr>
      <hr/>
      <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{getStar(item.starItem)}</td>
      <td><input type="checkbox"/></td>
      </tr>
      </div>
    )
  })
  return (
    <div className="person-detail">
    <Person person ={props.person}/>
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

export default PersonDeatil;
