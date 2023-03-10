import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => setNewTitle(event.target.value);

  const amountChangeHandler = (event) => setNewAmount(event.target.value);

  const dateChangeHandler = (event) => setNewDate(event.target.value);

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{newTitle}</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>{newAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>{newDate}</label>
          <input
            type="Date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
