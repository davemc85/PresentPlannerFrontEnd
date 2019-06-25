import React from 'react';
import {Link} from 'react-router-dom';

const Person = ({person}) => {

  if(!person) {
    return <p>Waiting for person....</p>
  }

  const url = "/persons/" + person.id;

    return (
        <React.Fragment>
          
          <Link to={url} className="name">
           {person.name}
          </Link>
        </React.Fragment>
      )
    }

    export default Person;
