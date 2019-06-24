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
  <div className="item-component">
    <Item item={props.item}/>
    <p>{props.item.location}</p>
    <p>{props.item.link}</p>
    <p>{props.item.additionalDetail}</p>
    <button onClick={handleDeleteClick}>Delete Item</button>
    <Link to={editUrl}><button type="button">Edit Item</button></Link>
  </div>
)

}
export default ItemDetail
