import "./ExpandItem.css";
import ExpenseDate from "./components/ExpenseDate";
import Card from "../Wrapper/Card";
import React, { useState } from "react"

function ExpenseItem(props) {

 const [title, setTitle] = useState(props.expense.title) 

const changeTitle = () => {
  setTitle("Updated!!!")
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
