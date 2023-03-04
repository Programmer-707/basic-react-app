import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import "./newExpense.css"

const newExpense = (props) => {

  const addNewExpense = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.updateExpenses(newExpenseData)
  }
  return (
    <div className="new-expense">
        <ExpenseForm addNewExpense={addNewExpense}/>
    </div>
  )
}

export default newExpense