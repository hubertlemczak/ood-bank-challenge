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
    this.viewAccount(accountName);
    const statement = new Statement();
    statement.printStatement();
  }

  closeAccount(accountName) {
    accountName;
  }
}
console.log(new Date().toLocaleDateString());
module.exports = BankView;
