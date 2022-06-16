let id = 100;
class Transaction {
  constructor(amount, type) {
    this.transactionId = id++;
    this.transactionDate = new Date().toLocaleString();
    this.transactionAmount = amount;
    this.transactionType = type;
  }

  get Id() {
    return this.transactionId;
  }

  get Date() {
    return this.transactionDate;
  }

  get Amount() {
    return this.transactionAmount;
  }

  get Type() {
    return this.transactionType;
  }

  isDebit() {
    return this.transactionType === 'debit';
  }
}

module.exports = Transaction;
