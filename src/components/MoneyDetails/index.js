// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount, balanceAmount} = props

  return (
    <div className="moneyDetails-bg-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="img"
          alt="balance"
        />
        <div>
          <p>Your balance</p>
          <p className="rs" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div>
          <p>Your Income</p>
          <p className="rs" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="img"
          alt="expenses"
        />
        <div>
          <p>Your expenses</p>
          <p className="rs" data-testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
