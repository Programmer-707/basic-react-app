import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/NewExpense/newExpense";
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Car Insurance",
      id: 1,
      amount: 299.99,
      date: new Date(2021, 8, 14),
    },
    { title: "New TV", id: 2, amount: 29.99, date: new Date(2022, 5, 23) },
    {
      title: "Accomodation",
      id: 3,
      amount: 50899.99,
      date: new Date(2020, 2, 14),
    },
    { title: "New Laptop", id: 4, amount: 659.99, date: new Date(2021, 6, 10) },
    {
      title: "Iphone 14 Pro",
      id: 5,
      amount: 7889.99,
      date: new Date(2022, 10, 19),
    },
  ]);

  const updateExpense = (newExpenseData) => {
    // setExpenses(expenses.push(newExpenseData));
    console.log(expenses);
  };

  return (
    <div>
      <h2>Lets get started</h2>
      <NewExpense updateExpenses={updateExpense} />
      <ExpenseItems expenses={expenses} />
    </div>
  );
}

export default App;
