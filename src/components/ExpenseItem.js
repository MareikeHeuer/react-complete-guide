import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 20 2021</div>
      <div className="expense-item__description">
        <h2>Birthday Present</h2>
      </div>
      <div className="expense-item__price">$214.15</div>
    </div>
  );
}

export default ExpenseItem;
