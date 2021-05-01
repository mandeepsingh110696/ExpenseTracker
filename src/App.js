import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";
const dummy_data = [
  {
    id: "e1",
    title: "car",
    amount: 456,
    date: new Date(2021, 4, 18),
  },
  {
    id: "e2",
    title: "cycle",
    amount: 567,
    date: new Date(2021, 4, 8),
  },
  {
    id: "e3",
    title: "motercycle",
    amount: 679,
    date: new Date(2021, 4, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_data);
  const sendAppHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSendToApp={sendAppHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
