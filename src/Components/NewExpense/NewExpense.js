import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (prop) => {
  const NewExpenseHandler = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    prop.onSendToApp(expensedata);
    setEdited(false);
  };

  const [isEdited, setEdited] = useState(false);
  const formHandler = () => {
    setEdited(true);
  };
  const stopEditingHandler = () => {
    setEdited(false);
  };
  return (
    <div className="new-expense">
      {!isEdited && <button onClick={formHandler}>Add new Expense</button>}
      {isEdited && (
        <ExpenseForm
          onSendDataNewExpense={NewExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
