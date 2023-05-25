import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Remainder from "./models/remainder";

const remainders: Remainder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  return (
    <div className="App">
      <ReminderList items={ remainders } />
    </div>
  );
}

export default App;
