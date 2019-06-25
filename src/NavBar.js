import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

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
              </ul>
      </header>
  )
}

export default NavBar;
