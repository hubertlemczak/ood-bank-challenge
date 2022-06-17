const Bank = require('./Bank');
const Statement = require('./Statement');
const bank = new Bank();

class BankView {
  openAccount(accountName, initialDeposit) {
    const account = bank.createAccount(accountName);
    account.makeDeposit(initialDeposit);
    return account;
  }

  viewAccount(accountName) {
    return bank.getAccount(accountName);
  }

  viewAccountStatement(accountName) {
    const account = this.viewAccount(accountName);
    const transactions = account.Transactions;
    const statement = new Statement();
    return statement.printStatement(transactions);
  }

  // closeAccount(accountName) {
  //   accountName;
  // }
}

module.exports = BankView;
