import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [entredAmount, setenteredAmount] = useState("");
  const [entredDate, setenteredDate] = useState("");
  useState({
    enteredtitle: "",
    entredAmount: "",
    entredDate: "",
  });

  const titleChangeHandler = (event) => {
    setEnteredtitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };
    props.onExpenseData(expenseData);
    setEnteredtitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
