import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredInputTitle, setEnteredInput] = useState("");
  const [enteredInputNumber, setEnteredNumber] = useState("");
  const [enteredInputDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredInput(event.target.value);
    console.log("Title");
  };
  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
    console.log("Number");
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("Date");
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredInput(value);
    } else if (identifier === "Date") {
      setEnteredDate(value);
    } else {
      setEnteredNumber(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredInputTitle,
      amount: enteredInputNumber,
      date: new Date(enteredInputDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Upload</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
