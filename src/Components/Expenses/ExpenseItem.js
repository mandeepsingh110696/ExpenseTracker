import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (prop) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">${prop.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
