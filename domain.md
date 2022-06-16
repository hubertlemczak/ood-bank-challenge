```
class BankView
METHODS:
  - openAccount(accountName, initialDeposit) => createAccount() -- makeDeposit()
  - viewAccount(accountName) => get account()
  - viewAccountStatement(accountName) => get account() -- get transactions() -- new Statement() -- printStatement()

```

```
class Bank
PROPERTIES:
  - accounts (Arr new of BankAccount()) = []
METHODS:
  - createAccount(accountName) => new BankAccount(accountName)
  - get account(accountName) => account
```

```
class BankAccount
PROPERTIES: (accountName)
  - accountId (Int) = id++
  - accountName (String) = accountName
  - accountTransactions (Arr of new Transaction()) = []
METHODS:
  - makeDeposit(amount) => new Transaction(type) //type = credit
  - makeWithdrawal(amount) => new Transaction(type) //type = debit
  - get transactions() => accountTransactions Arr
  - getBalance()
```

```
class Transaction
PROPERTIES: (amount, type)
  - transactionId (Int) = id++
  - transactionDate (Date())
  - transactionAmount (Int) = amount
  - transactionType (String) = type (credit or debit)
METHODS:
  - get transactionId() => transactionId
  - get transactionDate() => transactionDate
  - get transactionAmount() => transactionAmount
  - isDebit() => Boolean
```

```
class Statement
PROPERTIES:
  - row (String) id, date, credit, debit, balance
METHODS:
  - printRow()
  - printStatement()
```
