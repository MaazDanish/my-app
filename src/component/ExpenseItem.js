import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div >15 August 2024</div>
            <div className='expense-item__location '>Delhi</div>
            <div className='expense-item__description'>
                <h1>Book</h1>
                <div className='expense-item__price'>Rs. 500</div>
            </div>
        </div>
    )
}

export default ExpenseItem;