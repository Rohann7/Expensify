import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2023");

  const getYear = (selectedYear) => setYear(selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} selected={year} />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
