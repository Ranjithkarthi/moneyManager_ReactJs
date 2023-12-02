import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onSubmitTransactionDetails = event => {
    event.preventDefault()
    const {transactionList, title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newObj = {
      id: v4(),
      title,
      amount: parseInt(amount),
      optionId,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newObj],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpense = () => {
    const {transactionList} = this.state
    let expense = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expense += eachTransaction.amount
      }
    })
    return expense
  }

  getBalance = () => {
    const {transactionList} = this.state
    let income = 0
    let expense = 0
    let balance = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expense += eachTransaction.amount
      }
    })
    balance = income - expense
    return balance
  }

  onClickDelete = id => {
    const {transactionList} = this.state
    this.setState(prevState => {
      const filteredList = prevState.transactionList.filter(
        eachItem => eachItem.id !== id,
      )
      return {transactionList: filteredList}
    })
  }

  render() {
    const {title, amount, optionId, transactionList} = this.state

    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()
    const balanceAmount = this.getBalance()

    return (
      <div className="bg-container">
        <div className="banner-container">
          <h1>Hi, Ranjith k</h1>
          <p>
            Welcome back to your{' '}
            <span className="money-manager-color">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
            balanceAmount={balanceAmount}
          />
        </div>
        <div className="form-history-container">
          <form
            className="form-container"
            onSubmit={this.onSubmitTransactionDetails}
          >
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label htmlFor="titleInput">TITLE</label>
            <br />
            <input
              type="text"
              placeholder="TITLE"
              className="input-holder"
              value={title}
              id="titleInput"
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amountInput">AMOUNT</label>
            <br />
            <input
              type="text"
              placeholder="AMOUNT"
              value={amount}
              className="input-holder"
              id="amountInput"
              onChange={this.onChangeAmount}
            />
            <br />
            <label htmlFor="select">TYPE</label>
            <br />
            <select
              id="select"
              className="input-holder"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-main-heading">History</h1>
            <ul className="history-ul-container">
              <li className="li-heading-container">
                <p className="history-heading">Title</p>
                <p className="history-heading">Amount</p>
                <p className="history-heading">Type</p>
              </li>

              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  eachTransaction={eachTransaction}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
