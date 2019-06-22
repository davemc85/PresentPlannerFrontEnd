import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({item}) => {

  if(!item){
    return <p>item coming soon!...</p>
  }

  // const url = "/items/" + item.id;

  // return (
  //   // <React.Fragment>
  //   //   <Link to {url} className="item_name">
  //   //     {item.name}
  //   //   </Link>
  //   //   <p>{item.description}</p>
  //   // </React.Fragment>
  // )
}

export default Item;
