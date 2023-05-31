import './TransactionHistory.css';

const TransactionItem = ({ transaction }) => {
  return (
    <tr key={transaction.id} className="table-content">
      <td className="table-data">{transaction.type}</td>
      <td className="table-data">{transaction.amount}</td>
      <td className="table-data">{transaction.currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionItem transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
