import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import AddNewExpense from "./components/NewExpense/AddNewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
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
];

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_DATA);

  const updateExpense = (newExpenseData) => {
    setExpensesData((prevExpensesData) => {
      return [newExpenseData, ...prevExpensesData];
    });
  };

  return (
    <div>
      <AddNewExpense updateExpense={updateExpense} />
      <ExpenseItems expenses={expensesData} />
    </div>
  );
}

export default App;
