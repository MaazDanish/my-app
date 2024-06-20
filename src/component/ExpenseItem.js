import './ExpenseItem.css'
function ExpenseItem(props) {

    const months = ['January', 'februry', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[props.date.getMonth()];
    // console.log(month,"Month is here");
    const year = props.date.getFullYear();
    const day = props.date.getDate();

    return (
        <div className="expense-item">
            <div >
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__location '>{props.location}</div>
            <div className='expense-item__description'>
                <h1>{props.title}</h1>
                <div className='expense-item__price'>${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;