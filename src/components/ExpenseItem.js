import "./ExpenseItem.css";

{/* -- This is called object destructuring. -- */}
// export default function ExpenseItem({date, title, amount})
export default function ExpenseItem(props) {
  //const expenseDate = new Date(2023, 6, 2); 
  //const expenseTitle = 'Car Insurence'; 
  //const expensePrice = 265.65;

  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

        {/* -- This is sending complete array object as a single parameter. -- */}
        {/* <div>{props.expense.date.toDateString()}</div>
        <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
        </div> */}

        {/* -- This is called object destructuring. -- */}
        {/* <div>{date.toDateString()}</div>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div> */}
    </div>
  );
}

// export default ExpenseItem;
