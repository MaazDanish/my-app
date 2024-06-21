import React from "react";
import './ExpenseForm.css';
import def from "ajv/dist/vocabularies/applicator/additionalItems";


const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Type your title here"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" placeholder="Type your expense amount"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-01-01" max="2025-01-01"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;