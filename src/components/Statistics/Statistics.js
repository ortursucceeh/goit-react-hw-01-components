import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatsList = ({ stats }) => {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css['item']}>
          <span className={css['label']}>{label}</span>
          <span className={css['percentage']}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css['statistics']}>
      {title ? <h2 className={css['title']}>{title}</h2> : ''}
      <StatsList stats={stats} />
    </section>
  );
};

export default Statistics;

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
