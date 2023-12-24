import React, { useContext } from 'react'
import Transactions from './Transactions'
import './TransactionList.css'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {

  const { transactions } = useContext(GlobalContext);

  return (
    <main className='main-container'>
      <h2>HISTORY</h2>
      <hr/>
      <ul>{transactions.map(transaction => <Transactions key = {transaction.id} transaction={transaction}/>)}
      </ul>
      
    </main>
  )
}

export default TransactionList