import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectYear = (event)=> {
    props.selectFilterYear(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectYear}  >
        <option value="" selected disabled hidden>Select a year</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option> 
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
