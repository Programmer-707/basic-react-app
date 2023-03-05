import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./newExpense.css";

const AddNewExpense = (props) => {
  const [isAddExpenseForm, setIsAddExpenseForm] = useState(false);

  const updateExpenseList = (newData) => {
    const newExpenseData = {
      ...newData,
      id: Math.random().toString(),
    };
    props.updateExpense(newExpenseData);
    setIsAddExpenseForm(false);
  };

  const addExpenseForm = () => {
    setIsAddExpenseForm(true);
  };

  const cancelForm = () => {
    setIsAddExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {isAddExpenseForm ? (
        <ExpenseForm updateExpenseList={updateExpenseList} cancelForm={cancelForm} />
      ) : (
        <button onClick={addExpenseForm}>Add new expense</button>
      )}
    </div>
  );
};

export default AddNewExpense;
