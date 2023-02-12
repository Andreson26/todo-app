import React from 'react'
import Item from './Item'

function List(props) {
  return (
    <ul>
        {props.list.map((item) => (
            <Item 
                key={item.id}
                item={item}
                handleDelete={props.handleDelete}
                handleToggle={props.handleToggle}
                handleCount={props.handleCount}
            />
        ))}
    </ul>
  )
}

export default List