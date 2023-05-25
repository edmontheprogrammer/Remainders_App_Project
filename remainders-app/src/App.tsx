import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Remainder from "./models/remainder";

function App() {
  const [remainders, seRemainders] = useState<Remainder[]>([
    { id: 1, title: "Reminder 1" },
  ]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <ReminderList items={remainders} />
    </div>
  );
}

export default App;
