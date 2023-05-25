import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Remainder from "./models/remainder";
import reminderService from "./services/reminder";

function App() {
  const [remainders, setRemainders] = useState<Remainder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getRemainders();
    setRemainders(reminders);
  };

  return (
    <div className="App">
      <ReminderList items={remainders} />
    </div>
  );
}

export default App;
