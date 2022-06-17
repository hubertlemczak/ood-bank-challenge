const Bank = require('../src/Bank');

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });
  // Tests for createAccount()
  it('successfully creates account', () => {
    const result = bank.createAccount('My First Account');
    expect(result.accountName).toEqual('My First Account');
  });
  // Tests for getAccount()
  it('successfully gets account', () => {
    bank.createAccount('My First Account');
    const result = bank.getAccount('My First Account');
    expect(result.accountName).toEqual('My First Account');
  });
  // Tests for deleteAccount()
  it('successfully deletes account', () => {
    bank.createAccount('My First Account');
    bank.deleteAccount('My First Account');
    const result = bank.Accounts;
    expect(result).toEqual([]);
  });
});
