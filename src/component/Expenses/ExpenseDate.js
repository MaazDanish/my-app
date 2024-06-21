// import './ExpenseDate.css';
// const months = ['January', 'februry', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// const ExpenseDate = (props) => {
//     const month = months[props.date.getMonth()];
//     const year = props.date.getFullYear();
//     const day = props.date.getDate();

//     return (
//         <div className='expense-date' >
//             <div className='expense-date__month'>{month}</div>
//             <div className='expense-date__year'>{year}</div>
//             <div className='expense-date__date'>{day}</div>
//         </div>
//     )
// }

// export default ExpenseDate;
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
