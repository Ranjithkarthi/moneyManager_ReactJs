// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onClickDelete} = props
  const {id, title, amount, type} = eachTransaction

  const deleteHistory = () => {
    onClickDelete(id)
  }

  return (
    <div className="li-container">
      <hr className="hr-line" />
      <li className="li-heading-container2">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>

        <button type="button" className="dlt-btn" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="dlt-img"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default TransactionItem
