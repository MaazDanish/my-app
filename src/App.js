import ExpenseItem from "./component/ExpenseItem";
//import logo from './logo.svg';
// import './App.css';

function App() {
  const expenses = [
    { id: 1, date: new Date(2024, 6, 21), title: 'Book', price: 20, location: 'Delhi' },
    { id: 2, date: new Date(2024, 7, 23), title: 'Shoes', price: 20, location: 'SRE' },
    { id: 3, date: new Date(2024, 8, 19), title: 'toothpaste', price: 30, location: 'UP' },
    { id: 4, date: new Date(2024, 9, 11), title: 'Brush', price: 10, location: 'UK' }
  ]
  return (
    <div>
      <h> Hello world</h>
      {/* <ExpenseItem date={new Date(2024, 6, 21)} title='Book' price='20' location='Delhi'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 7, 21)} title='phone' price='20000' location='Mumbau'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 8, 21)} title='mobile' price='2000000' location='SRe'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 9, 21)} title='apple' price='200' location='behat'></ExpenseItem> 0*/}

      {
        expenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        })
      }

    </div>
  );
}

export default App;
