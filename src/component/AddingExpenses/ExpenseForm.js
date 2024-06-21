import React, { useState } from "react";
import './ExpenseForm.css';
import def from "ajv/dist/vocabularies/applicator/additionalItems";


const ExpenseForm = () => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");
    const titleHandler = (event) => {
        setInputTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setInputDate(event.target.value);
    }

    const formHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(expenseData);

        setInputTitle("");
        setInputAmount("");
        setInputDate("");
        
    }

    return (
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={inputTitle} id="title" onChange={titleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={inputAmount} id="amount" onChange={amountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={inputDate} min="2024-01-01" max="2025-01-01" onChange={dateHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;