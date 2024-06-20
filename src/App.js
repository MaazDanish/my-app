import ExpenseItem from "./component/ExpenseItem";
//import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <h> Hello world</h>
      <ExpenseItem date={new Date(2024, 6, 21)} title='Book' price='20' location='Delhi'></ExpenseItem>
    </div>
  );
}

export default App;
