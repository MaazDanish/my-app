import React, { useState } from "react";
import './ExpenseForm.css';
import def from "ajv/dist/vocabularies/applicator/additionalItems";


const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: "", enteredAmount: "", enteredDate: ""
    })
    // const [inputTitle, setInputTitle] = useState("");
    // const [inputAmount, setInputAmount] = useState("");
    // const [inputDate, setInputDate] = useState("");
    const titleHandler = (event) => {
        // setInputTitle(event.target.value);
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle:event.target.value
            }
        })
    }

    const amountHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount:event.target.value
            }
        })
    }

    const dateHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate:event.target.value
            }
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={amountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2024-01-01" max="2025-01-01" onChange={dateHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;