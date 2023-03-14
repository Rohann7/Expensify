import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({onAddExpense}) => {

  const [form, setForm] = useState(false);

  const showFormHandler = () => setForm(true)

  const cancelFormHandler = () => setForm(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
    setForm(false)
  }

  return (
    <div className='new-expense'>
      {!form && <button onClick={showFormHandler}>Add New Expense</button>}
      {form && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={cancelFormHandler}/>
      )}
    </div>
  );
}

export default NewExpense;