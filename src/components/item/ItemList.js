import React from 'react';
import Item from './Item.js';

const ItemList = (props) => {

  if(!props.item.length === 0){
    return (
      <p>Loading list....</p>
    )
  }

  const allItems = props.items.map((item) => {
    return (
      <li key={item.id} className="component-item">
        <div className="component">
          <Item item={item}/>
        </div>
      </li>
    )
  })

  return(
    <ul className="component-list">
      {allItems}
    </ul>
  )

}
export default ItemList;
