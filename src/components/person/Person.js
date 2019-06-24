import React from 'react';
import {Link} from 'react-router-dom';

const Person = ({person}) => {

  if(!person){
    return <p>Waiting for person....</p>
  }

  const url = "/persons/" + person.id;

    return (
        <React.Fragment>
         <Link to={url} className="person_name">
          Name: {person.name}
         </Link>
          <p>Relation: {person.relation}</p>
        </React.Fragment>
      )
    }

    export default Person;
