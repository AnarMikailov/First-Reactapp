import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsediting] = useState(false);
  const startEditingHandler = () => {
    setIsediting(true);
  };
  const stopEditingHandler0 = () => {
    setIsediting(false);
  };
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
    setIsediting(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler0}
        />
      )}
    </div>
  );
};

export default NewExpense;
