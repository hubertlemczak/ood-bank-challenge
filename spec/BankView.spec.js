const BankView = require('../src/BankView');

describe('BankView', () => {
  let bankView;
  beforeEach(() => {
    bankView = new BankView();
  });
  // Tests for openAccount()
  it('successfully opens account', () => {
    const result = bankView.openAccount('My First Account', 200);
    expect(result.accountName).toEqual('My First Account');
    expect(result.accountTransactions[0].transactionAmount).toEqual(200);
  });
});
