import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2024,7,21).toISOString();
    const expenseTitle = 'Mobile';
    const expensePrice = 20000;
    const expenseLocation = 'Bangalore';
    return (
        <div className="expense-item">
            <div >{expenseDate}</div>
            <div className='expense-item__location '>{expenseLocation}</div>
            <div className='expense-item__description'>
                <h1>{expenseTitle}</h1>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;