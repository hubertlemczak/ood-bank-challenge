let id = 100;
class Transaction {
  #transactionId;
  #transactionDate;
  #transactionAmount;
  #transactionType;
  constructor(amount, type) {
    this.#transactionId = id++;
    this.#transactionDate = new Date().toLocaleDateString();
    this.#transactionAmount = amount;
    this.#transactionType = type;
  }

  get Id() {
    return this.#transactionId;
  }

  get Date() {
    return this.#transactionDate;
  }

  get Amount() {
    return this.#transactionAmount;
  }

  get Type() {
    return this.#transactionType;
  }

  get All() {
    return [this.Date, this.Amount, this.Type];
  }

  isDebit() {
    return this.Type === 'debit';
  }
}

module.exports = Transaction;
