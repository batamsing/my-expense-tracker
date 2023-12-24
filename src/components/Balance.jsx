import React, { useContext } from 'react'
import './Balance.css'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const {transactions} = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
        <p className="balance-title">Your balance</p>
        <p className="balance-amount">$ {total}</p>
    </div>
  )
}

export default Balance