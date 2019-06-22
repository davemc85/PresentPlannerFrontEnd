import React from 'react';
import {Link} from 'react-router-dom';

const Person = ({person}) => {

  if(!person){
    return <p>Waiting for person....</p>
  }

  const url = "/person" + person.id;

   return (
        <React.Fragment>
         <Link to {url} className="person_name">
          Name: {props.person.name}
         </Link>
          <p>Relation: {props.person.relation}</p>
        </React.Fragment>
      )
    }

    export default Person;
