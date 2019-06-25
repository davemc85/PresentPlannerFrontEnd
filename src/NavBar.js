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
        <a href="/dates">Up Coming Event Dates</a>
        </li>
        <li className="navLink">
        <a href="/items">Gift Items Ideas</a>
        </li>
        </ul>
      </header>
  )
}

export default NavBar;
