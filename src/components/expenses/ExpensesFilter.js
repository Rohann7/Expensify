import './ExpensesFilter.css'

const ExpensesFilter = ({getYear, selected}) => {

  const selectedYear = e => {
    let year = e.target.value;
    getYear(year);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={selectedYear}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;