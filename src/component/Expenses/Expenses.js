import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { checkDataType } from "ajv/dist/compile/validate/dataType";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter(xpense => {
    return xpense.date.getFullYear().toString() === filteredYear;
  })

  let content = <p className="expense-p">No data found</p>;

  if (filteredExpenses.length > 0) {
    content = filteredExpenses.map((expense) => {
      console.log(expense.date, filteredYear);
      return (
        <>
        
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        
          {filteredExpenses.length === 1 &&
            (<p className="expense-p">only one data found</p>)
          }
         
        </>
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
      {content}
    </Card >
  );
}

export default Expenses;
