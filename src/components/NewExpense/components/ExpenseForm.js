import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /** Using multiple useState */
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [expenseData, setexpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const addTitle = (event) => {
    setexpenseData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const addAmount = (event) => {
    setexpenseData((prevState) => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };

  const addDate = (event) => {
    setexpenseData((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };

  const addExpense = (event) => {
    event.preventDefault();
    props.updateExpenseList(expenseData);
  };

  function formatDate(date) {
    if(!date){
      return ''
    }

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  return (
    <form onSubmit={addExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expenseData.title} onChange={addTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseData.amount}
            onChange={addAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            asp-for="MyDate"
            asp-format="{0:yyyy-MM-dd}"
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={formatDate(expenseData.date)}
            onChange={addDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.cancelForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
