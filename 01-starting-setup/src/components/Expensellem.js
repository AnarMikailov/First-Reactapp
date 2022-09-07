import React, { useState } from "react";
import ExpendDate from "./ExpendDate";
import "./Expensellem.css";
import Card from "./Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");

    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpendDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;