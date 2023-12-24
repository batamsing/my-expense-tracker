import React, { useContext } from 'react'
import './IncomeExpense.css'
import { GlobalContext } from '../context/GlobalState'
function IncomeExpense() {

  const {transactions} = useContext(GlobalContext);
  // Calculate total income and expenses
  const amount = transactions.map(transaction => transaction.amount);

  const income = amount.filter(item=>item>0).reduce((acc, item)=>acc+item, 0);

  const expense = amount.filter(item=>item<0).reduce((acc, item)=>acc+item, 0);

  return (
    <div className='income-expense-container'>
        <div className='income-container'>
            <p className='bal-header'>INCOME</p>
            <p className='income-bal bal'>$ {income}</p>
        </div>
        <div className='horizontal-line' ></div>
        <div className='expense-container'>
            <p className='bal-header'>EXPENSE</p>
            <p className='expense-bal bal'>$ {expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense