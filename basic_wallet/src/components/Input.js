import React, { useState } from 'react';
import axios from 'axios';
// import blockchain from '../../../basic_transactions_gp';

function Input(props) {
  const [username, setUsername] = useState('Sade');

  const onChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/changeUsername', { username })
      .then(res => {
        console.log(res);
        setUsername(username);
      })
      .catch(err => console.error(err));
  };
  // function extractTransactions(blockchain) {
  //   const transactions = [];
  //   Object.keys(blockchain.chain).map(key => {
  //     blockchain.chain[key].transactions.map(transaction => {
  //       transactions.push(transaction);
  //     });
  //   });
  //   return transactions;
  // }

  // function caculateBalance(transactions, user) {
  //   let balance = transactions.reduce((acc, transaction) => {
  //     if (transaction.recipient === user) {
  //       return acc + parseFloat(transaction.amount);
  //     } else if (transaction.sender === user) {
  //       return acc - parseFloat(transaction.amount);
  //     } else {
  //       return acc;
  //     }
  //   }, 0);
  //   return balance;
  // }

  // const transactions = extractTransactions(blockchain);

  return (
    <div>
      <h2>Basic Wallet</h2>
      {/* * Allow the user to enter, save, or change the `id` used for the program */}

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="id"
          value={username}
          onChange={onChangeUsername}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Input;
