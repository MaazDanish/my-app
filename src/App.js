import React, { useState } from "react";

import NewExpense from "./component/AddingExpenses/NewExpense";
import Expenses from "./component/Expenses/Expenses";

let expenses = [
  { id: 1, date: new Date(2022, 6, 21), title: 'Book', price: 20 },
  { id: 2, date: new Date(2023, 7, 23), title: 'Shoes', price: 20 },
  { id: 3, date: new Date(2024, 8, 19), title: 'toothpaste', price: 30 },
  { id: 4, date: new Date(2024, 9, 11), title: 'Brush', price: 10 },
  { id: 5, date: new Date(2023, 9, 11), title: 'Brushses', price: 100 },
]

const App = () => {
  const [expensess, setExpenses] = useState(expenses);
  const GettingDataHandler = (data) => {
    console.log(data);
    setExpenses((exp) => {
      return [data, ...exp];
    })
  }

  return (
    <div>
      <NewExpense onGettingDataFromNewExpense={GettingDataHandler} />
      <Expenses expenses={expensess} />
    </div>
  );

}

export default App;
