import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const ExpenseDataFromFormHandler = (data) => {
        // console.log(data,"the data coming from new expense");
        props.onGettingDataFromNewExpense(data);
    }

    return (

        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ExpenseDataFromFormHandler} />
        </div>
    )
}

export default NewExpense;