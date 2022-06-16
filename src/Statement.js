class Statement {
  constructor() {
    this.topRow = 'Transaction ID || Date || Credit || Debit || Balance';
  }
}
console.log(new Statement().topRow);
module.exports = Statement;
