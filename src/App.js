import ExpenseItem from "./component/ExpenseItem";
//import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <h> Hello world</h>
      <ExpenseItem date={new Date(2024, 6, 21)} title='Book' price='20' location='Delhi'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 7, 21)} title='phone' price='20000' location='Mumbau'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 8, 21)} title='mobile' price='2000000' location='SRe'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 9, 21)} title='apple' price='200' location='behat'></ExpenseItem>
    </div>
  );
}

export default App;
