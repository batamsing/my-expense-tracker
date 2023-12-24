import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css'

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount: +amount
    }

    

    addTransaction(newTransaction)
  }
  return (
    <div className='add-transaction-container'>
        <h2>Add Transaction</h2>
        <br />
        <form className='add-transaction-form' onSubmit={handleSubmit}>
            <label htmlFor='add-text'>Add Label</label>
            <input id='add-text' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
            <br />
            <label htmlFor='add-amount'>Enter Amount</label>
            <input id='add-amount' type='number' value={amount} onChange={e => setAmount(e.target.value)}></input>
            <br />
            <button className='add-button'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction