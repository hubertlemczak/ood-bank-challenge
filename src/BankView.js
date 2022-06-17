const Bank = require('./Bank');

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
    return account.getStatement();
  }
}

module.exports = BankView;
