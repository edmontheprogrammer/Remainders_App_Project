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

  const removeReminder = (id: number) => {
    setRemainders(remainders.filter((remainders) => remainders.id !== id));
  };

  return (
    <div className="App">
      <ReminderList items={remainders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
