const Transaction = require('../src/Transaction');

describe('Transaction', () => {
  let transaction;
  // Tests for isDebit()
  it('successfully checks type credit', () => {
    transaction = new Transaction(500, 'credit');
    const result = transaction.isDebit();
    expect(result).toEqual(false);
  });

  it('successfully checks type debit', () => {
    transaction = new Transaction(500, 'debit');
    const result = transaction.isDebit();
    expect(result).toEqual(true);
  });
  // Tests for get All
  it('successfully gets all data', () => {
    transaction = new Transaction(500, 'debit');
    const result = transaction.All;
    expect(result).toEqual([new Date().toLocaleDateString(), 500, 'debit']);
  });
});
