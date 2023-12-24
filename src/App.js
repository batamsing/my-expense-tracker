import React from 'react';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import './App.css'
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
    <div className='App'>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
