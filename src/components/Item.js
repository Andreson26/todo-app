import React from "react";
import "./Item.css"

function Item({ item, handleDelete, handleToggle, handleCount }) {
  return (
    <li
      className={item.completed ? "item-completed" : ""}
    >
      <button className="toggle" onClick={() => handleToggle(item)}>
        Toggle
      </button>
      <p style={{ margin: "10px" }}>{item.value}</p>
      <button className="delete" onClick={() => handleDelete(item)}>
        delete
      </button>

      <button onClick={() =>handleCount(item, true)}>increment</button>
      <p className="number">{item.counter}</p>
      <button onClick={() => handleCount(item, false)}>decrement</button>
    </li>
  );
}

export default Item;
