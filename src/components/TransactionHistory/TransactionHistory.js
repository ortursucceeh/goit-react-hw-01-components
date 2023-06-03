import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction }) => {
  return (
    <tr className={css['table-content']}>
      <td className={css['table-data']}>{transaction.type}</td>
      <td className={css['table-data']}>{transaction.amount}</td>
      <td className={css['table-data']}>{transaction.currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['table']}>
      <thead className={css['table__header']}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

TransactionItem.propTypes = {
  transaction: PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
