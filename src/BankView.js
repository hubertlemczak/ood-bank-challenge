const Bank = require('./Bank');
const Statement = require('./Statement');

class BankView {
  constructor() {
    this.bank = new Bank();
  }

  openAccount(accountName, initialDeposit) {
    const account = this.bank.createAccount(accountName);
    account.makeDeposit(initialDeposit);
    return account;
  }

  closeAccount(accountName) {
    return this.bank.deleteAccount(accountName);
  }

  viewAccount(accountName) {
    return this.bank.getAccount(accountName);
  }

  viewAccountStatement(accountName) {
    const account = this.viewAccount(accountName);
    const transactions = account.Transactions;
    const statement = new Statement();
    return statement.printStatement(transactions);
  }
}

module.exports = BankView;
