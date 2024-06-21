import Expenses from "./component/Expenses/Expenses";

const expenses = [
  { id: 1, date: new Date(2024, 6, 21), title: 'Book', price: 20, location: 'Delhi' },
  { id: 2, date: new Date(2024, 7, 23), title: 'Shoes', price: 20, location: 'SRE' },
  { id: 3, date: new Date(2024, 8, 19), title: 'toothpaste', price: 30, location: 'UP' },
  { id: 4, date: new Date(2024, 9, 11), title: 'Brush', price: 10, location: 'UK' }
]

const App = () => {

  return (
    <div>
      <h> Hello world</h>
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App;
