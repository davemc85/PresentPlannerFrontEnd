import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <img src="http://www.celebrateeventplanning.com/wp-content/uploads/2017/05/Celebrate-Logo-transparent-backgroundcropped-medium.png" alt="Logo"/>
      <h1>PRESENT PLANNER REMINDER</h1>
         <ul>
        <li className="navLink">
          <a href="/persons">Persons</a>
          </li>
          <li className="navLink">
            <a href="/dates">EventDates</a>
            </li>
            <li className="navLink">
              <a href="/items">StockItems</a>
              </li>
      </header>
  )
}

export default NavBar;
