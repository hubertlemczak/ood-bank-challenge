const BankAccount = require('./BankAccount');

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountName) {
    const account = new BankAccount(accountName);
    this.accounts.push(account);
    return account;
  }

  deleteAccount(accountName) {
    accountName;
  }

  getAccount(accountName) {
    const accountFound = [];
    this.accounts.forEach((account) => {
      if (account.accountName === accountName) accountFound.push(account);
    });
    return accountFound;
  }
}

module.exports = Bank;
