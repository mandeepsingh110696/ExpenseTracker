import React, { useState } from "react";
import Card from "../Ui/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (prop) => {
  const [selectedyear, setYear] = useState("2021");
  const filterYear = (selectedyear) => {
    setYear(selectedyear);
  };

  const filterDataByYear = prop.item.filter((expensearray) => {
    return expensearray.date.getFullYear().toString() === selectedyear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedyear} onDropDownHandler={filterYear} />
        <ExpensesChart expenses={filterDataByYear} />
        <ExpenseList item={filterDataByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
