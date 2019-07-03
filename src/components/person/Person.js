import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Person = ({person}) => {

  if(!person) {
    return <p>Waiting for person....</p>
  }

  const url = "/persons/" + person.id;

    return (
      <div>

        <React.Fragment>

          <Link to={url}>
           {person.name}
          </Link>
        </React.Fragment>
        </div>
      )
    }

    export default Person;
