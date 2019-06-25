import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <h1>PRESENT PLANNER REMINDER</h1>
        <ul>
        <li className="navLink">
          <a href="/persons/new">Add a new person</a>
        </li>
        <li className="navLink">
          <a href="/items/new">Add a new item</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
