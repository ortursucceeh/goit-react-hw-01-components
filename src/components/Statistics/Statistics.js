import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatsList = ({ stats }) => {
  return (
    <ul className={css['stat-list']}>
      {stats.map(item => (
        <li key={item.id} className={css['item']}>
          <span className={css['label']}>{item.label}</span>
          <span className={css['percentage']}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css['statistics']}>
      <h2 className={css['title']}>{title ? title : 'Upload stats'}</h2>
      <StatsList stats={stats} />
    </section>
  );
};

export default Statistics;

StatsList.propTypes = {
  stats: PropTypes.array.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
