import "./ExpenseItems.css";
import ExpenseItem from "../ExpendItem/ExpenseItem";
import Card from "../Wrapper/Card";
import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./components/ExpensesChart";

function ExpenseItems(props) {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterByYear = (selectedYear) => {
    setFilteredExpenses(
      props.expenses.filter(
        (expense) => expense.date.getFullYear() == selectedYear
      )
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selectFilterYear={filterByYear} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p style={{color: 'white', textAlign: 'center'}}>Expense not found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))
      )}
    </Card>
  );
}

export default ExpenseItems;
