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
    expect(result.Transactions[0].Amount).toEqual(200);
    expect(result.Transactions[0].isDebit()).toEqual(false);
  });
  // Tests for closeAccount()
  it('successfully closes account', () => {
    bankView.openAccount('My Closing Account', 200);
    const result = bankView.closeAccount('My Closing Account');
    expect(result).toEqual([]);
  });
  // Tests for viewAccount()
  it('successfully makes deposit', () => {
    const expected0 = ['17/06/2022', 200, 'credit'];
    const expected1 = ['17/06/2022', 500, 'credit'];
    bankView.openAccount('My Account', 200);
    const account = bankView.viewAccount('My Account');
    account.makeDeposit(500);
    const result = account.Transactions;
    expect(result.length).toEqual(2);
    expect(result[0].All).toEqual(expected0);
    expect(result[1].All).toEqual(expected1);
  });

  it('successfully makes withdrawal', () => {
    const expected0 = ['17/06/2022', 200, 'credit'];
    const expected1 = ['17/06/2022', 500, 'debit'];
    bankView.openAccount('My Account', 200);
    const account = bankView.viewAccount('My Account');
    account.makeWithdrawal(500);
    const result = account.Transactions;
    expect(result.length).toEqual(2);
    expect(result[0].All).toEqual(expected0);
    expect(result[1].All).toEqual(expected1);
  });

  it('successfully calculates balance', () => {
    const expected = 700;
    bankView.openAccount('My Account', 200);
    const account = bankView.viewAccount('My Account');
    account.makeDeposit(1000);
    account.makeWithdrawal(500);
    const result = account.Balance;
    expect(result).toEqual(expected);
  });
  // Tests for viewAccountStatement()
  it('successfully prints statement', () => {
    const expected = [
      'Date         || Credit  || Debit   || Balance',
      '17/06/2022   ||         || 500.00  || 700.50',
      '17/06/2022   || 1000.50 ||         || 1200.50',
      '17/06/2022   || 200.00 ||         || 200.00',
    ];
    bankView.openAccount('My Account', 200);
    const account = bankView.viewAccount('My Account');
    account.makeDeposit(1000.5);
    account.makeWithdrawal(500);
    const result = bankView.viewAccountStatement('My Account');
    expect(result).toEqual(expected);
  });
});
