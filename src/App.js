// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 6, 3),
    },
  ];

  return (
    <div className="App">
      <body>
        <h1 class="heading_wrapper">Expense Data</h1>
        <ExpenseItem  title="Toilet Paper" amount="94.12" date={new Date(2023, 5, 5)} />

        {/* -- This is sending complete array object as a single parameter. -- */}
        {/* <ExpenseItem  expense={expenses[1]} /> */}
        
        <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem  title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem  title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </body>
    </div>
  );
}

export default App;