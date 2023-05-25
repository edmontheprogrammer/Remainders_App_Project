import React from "react";
import Remainder from "../models/remainder";

interface ReminderListProps {
  items: Remainder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button className="btn btn-outline-danger mx-2 rounded-pill">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
