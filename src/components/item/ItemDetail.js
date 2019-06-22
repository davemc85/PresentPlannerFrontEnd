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

  const allItems = props.person.items.map((item, index) => {
    return <li key={index}>{item.name} {item.description} {item.price} {item.person}</li>
  })

return (
  <div className="item-component">
    <Item item={props.item}/>
  </div>
)

}
export default ItemDetail
