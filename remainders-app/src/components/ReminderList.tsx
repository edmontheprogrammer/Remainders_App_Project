import React from "react";
import Remainder from "../models/remainder";

interface ReminderListProps {
  items: Remainder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
