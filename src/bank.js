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
    this.accounts = this.accounts.filter((account) => account.accountName !== accountName);
    return this.accounts;
  }

  getAccount(accountName) {
    let accountFound;
    this.accounts.forEach((account) => {
      if (account.accountName === accountName) accountFound = account;
    });
    return accountFound;
  }

  get Accounts() {
    return this.accounts;
  }
}

module.exports = Bank;
