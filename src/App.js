import React from "react";

import NewExpense from "./component/AddingExpenses/NewExpense";
import Expenses from "./component/Expenses/Expenses";

const expenses = [
  { id: 1, date: new Date(2024, 6, 21), title: 'Book', price: 20 },
  { id: 2, date: new Date(2024, 7, 23), title: 'Shoes', price: 20 },
  { id: 3, date: new Date(2024, 8, 19), title: 'toothpaste', price: 30 },
  { id: 4, date: new Date(2024, 9, 11), title: 'Brush', price: 10 }
]

const App = () => {

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App;
