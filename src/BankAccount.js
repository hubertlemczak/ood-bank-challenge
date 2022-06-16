const Transaction = require('./Transaction');

let id = 0;
class BankAccount {
  constructor(accountName) {
    this.accountId = `BA${id++}`;
    this.accountName = accountName;
    this.accountTransactions = [];
  }

  makeDeposit(amount) {
    const transaction = new Transaction(amount, 'credit');
    this.accountTransactions.push(transaction);
    return transaction;
  }

  makeWithdrawal(amount) {
    const transaction = new Transaction(amount, 'debit');
    this.accountTransactions.push(transaction);
    return transaction;
  }

  get Transactions() {
    return this.accountTransactions;
  }

  get Balance() {
    let balance;
    return balance;
  }
}

module.exports = BankAccount;
