import React from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';

const ItemDetail = (props) => {
  if(!props.item){
    return <p>Item detail coming soon...</p>
  }

  const handleDeleteClick = () => {
    props.onDelete(props.item.id);
  }

  



  const editUrl = "/items/edit/" + props.item.id;

return (
  <div className="item-detail">
    <Item item={props.item}/>
    <p>Where: {props.item.location}</p>
    <p>Website Link? {props.item.link}</p>
    <p>Additional Detail: {props.item.additionalDetail}</p>
    <p>Gift idea for: {props.item.person.name}</p>
    <button onClick={handleDeleteClick}>Delete Item</button>
    <Link to={editUrl}><button type="button">Edit Item</button></Link>
  </div>
)

}
export default ItemDetail
