import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction }) => {
  return (
    <tr key={transaction.id} className={css['table-content']}>
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
        {items.map((transaction, index) => (
          <TransactionItem key={index} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};

TransactionHistory.propTypes = {
  transaction: PropTypes.array.isRequired,
};
