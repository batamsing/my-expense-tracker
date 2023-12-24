import React, {useContext} from 'react'
import './Transactions.css'
import { GlobalContext } from '../context/GlobalState';

function Transactions({transaction}) {
  
  const sign = transaction.amount > 0 ? '+' : '-';

  const {deleteTransaction} = useContext(GlobalContext);


  return (
    <li className={transaction.amount > 0 ? 'plus-border' : 'minus-border'}>
      <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
      <p>{transaction.text}</p>
      <p>{sign}$ {Math.abs(transaction.amount)}</p>
    </li>

  )
}

export default Transactions