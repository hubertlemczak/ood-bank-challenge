class Statement {
  constructor() {
    this.topRow = 'Date         || Credit  || Debit   || Balance';
  }

  getTransactionBalance() {}

  printRow(transaction, transactionBalance) {
    let singleRow;
    if (transaction.isDebit()) {
      singleRow = `${transaction.Date}   ||         || ${transaction.Amount.toFixed(
        2
      )}  || ${transactionBalance.toFixed(2)}`;
    } else {
      singleRow = `${transaction.Date}   || ${transaction.Amount.toFixed(2)} ||${' '.repeat(
        9
      )}|| ${transactionBalance.toFixed(2)}`;
    }
    return singleRow;
  }

  printStatement(transactions) {
    const statement = [];
    let transactionBalance = 0;
    transactions.forEach((transaction) => {
      if (transaction.isDebit()) transactionBalance -= transaction.Amount;
      else transactionBalance += transaction.Amount;
      statement.push(this.printRow(transaction, transactionBalance));
    });
    statement.push(this.topRow);
    statement.reverse().forEach((x) => console.log(x));
    return statement;
  }
}

module.exports = Statement;
