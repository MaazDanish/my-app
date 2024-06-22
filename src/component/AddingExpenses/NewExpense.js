import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const ExpenseDataFromFormHandler = (data) => {
        props.onGettingDataFromNewExpense(data);
        // when the form is submitted setting its visibility to hide
        setIsVisible(false);
    }

    // By default form is hidden,clicking on add expebse button will be visible
    const VisibilityHandlerofform = () => {
        setIsVisible(true);
    }

    const SettingVisibilityforchild = () => {
        setIsVisible(false);
    }

    return (

        <div className="new-expense">
            {/*  Changing the visibility of form */}
            {
                isVisible === false &&
                <button type="button" onClick={VisibilityHandlerofform}> Add Xpenses </button>
            }
            {
                isVisible === true &&
                <ExpenseForm onSaveExpenseData={ExpenseDataFromFormHandler} onCancel={SettingVisibilityforchild} />
            }
        </div>
    )
}

export default NewExpense;