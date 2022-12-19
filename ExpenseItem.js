import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount,updateamount]=useState(props.amount);  
  const clickHandler = () => {
    setTitle('Hello world');
    console.log("welcome");
  };
  const changeAmount=()=>{
    updateamount('100$');
  }

  return (
    <div className='expense-item'>      
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeAmount}>Change Amount</button>
    </div>
  );
}

export default ExpenseItem;