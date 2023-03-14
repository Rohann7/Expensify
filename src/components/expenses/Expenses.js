import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2023");

  const getYear = (selectedYear) => setYear(selectedYear);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} selected={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <div className="expenses-list">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <h3 className="expenses-list__fallback"> No expenses found!</h3>
      )}
    </div>
    </Card>
  );
};

export default Expenses;
