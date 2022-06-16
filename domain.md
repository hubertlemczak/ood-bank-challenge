```
class BankView
METHODS:
  - openAccount(accountName, initialDeposit) => createAccount() -- makeDeposit()
  - viewAccount(accountName) => getAccount()
  - viewAccountStatement(accountName) => get account() -- get transactions() -- new Statement() -- printStatement()
  - closeAccount(accountName) => removes account

```

```
class Bank
PROPERTIES:
  - accounts (Arr new of BankAccount()) = []
METHODS:
  - createAccount(accountName) => new BankAccount(accountName)
  - deleteAccount(accountName) => deletes account
  - getAccount(accountName) => account
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
  - get Transactions() => accountTransactions Arr
  - get Balance() => account balance
```

```
class Transaction
PROPERTIES: (amount, type)
  - #transactionId (Int) = id++
  - #transactionDate (new Date().toLocaleDateString())
  - #transactionAmount (Int) = amount
  - #transactionType (String) = type (credit or debit)
METHODS:
  - get Id() => #transactionId
  - get Date() => #transactionDate
  - get Amount() => #transactionAmount
  - get Type() => #transactionType
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
