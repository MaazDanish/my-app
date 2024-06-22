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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
      {filteredExpenses.length === 0 ? <p>No Data Is Found</p> : filteredExpenses.map((expense) => {
        console.log(expense.date, filteredYear);
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );

      })}
      {/* {} */}
    </Card>
  );
}

export default Expenses;
