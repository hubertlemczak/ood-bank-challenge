const BankAccount = require('../src/BankAccount');

describe('BankAccount', () => {
  let bankAccount;
  beforeEach(() => {
    bankAccount = new BankAccount();
  });
  // Tests for makeDeposit()
  it('successfully makes deposit', () => {
    const result = bankAccount.makeDeposit(200);
    expect(result.All).toEqual([new Date().toLocaleDateString(), 200, 'credit']);
  });
  // Tests for makeWithdrawal()
  it('successfully makes withdrawal', () => {
    const result = bankAccount.makeWithdrawal(500);
    expect(result.All).toEqual([new Date().toLocaleDateString(), 500, 'debit']);
  });
  // Tests for get Balance
  it('successfully gets balance', () => {
    bankAccount.makeDeposit(1000);
    bankAccount.makeWithdrawal(500);
    const result = bankAccount.Balance;
    expect(result).toEqual(500);
  });

  it('successfully gets negative balance', () => {
    bankAccount.makeWithdrawal(500);
    const result = bankAccount.Balance;
    expect(result).toEqual(-500);
  });
});
