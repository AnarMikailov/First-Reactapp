import "./Expenses.css";
import Card from "./Card";
import react, { useState } from "react";
import Expensesfilter from "../NewExpense/ExpensesFilter";
import Expensellem from "./Expensellem";
import ExpenseList from "../NewExpense/ExpenseList";
import ExpensesChart from "../NewExpense/ExpensesChart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No expenses found</p>;

  return (
    <div>
      <Card className="expenses">
        <Expensesfilter onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
