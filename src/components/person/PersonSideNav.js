import React from 'react';
import {Link} from 'react-router-dom';

const PersonSideNav = (props) => {
  return (
    <div className="sideNav">
    <a href="/persons/">Back To HomePage</a>
      <ul>
        <li className="sideNavPerson">
           <a href="/items">List Of Items</a>
          </li>
          <li>
            <a href="/items/new">Add Gift Idea</a>
        </li>
      </ul>
    </div>
  )
}
export default PersonSideNav;
