import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (prop) => {
  const [entertitle, newtitle] = useState("");
  const [enteramount, newamount] = useState("");
  const [enterdate, newdate] = useState("");

  const changeTitleHandler = (event) => {
    newtitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    newamount(event.target.value);
  };
  const changeDateHandler = (event) => {
    newdate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entertitle,
      amount: +enteramount,
      date: new Date(enterdate),
    };
    prop.onSendDataNewExpense(expenseData);
    newtitle("");
    newamount("");
    newdate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteramount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterdate} onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={prop.onCancel}>cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
