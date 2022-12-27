import "./ExpenseItems.css"
import ExpenseItem from "../ExpendItem/ExpenseItem"
import Card from "../Wrapper/Card";
import React from "react"


function ExpenseItems(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
}

export default ExpenseItems;