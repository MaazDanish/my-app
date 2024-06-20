import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseDate = props.date.toISOString();
    const expenseTitle = props.title;
    const expensePrice = props.price;
    const expenseLocation = props.location;
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