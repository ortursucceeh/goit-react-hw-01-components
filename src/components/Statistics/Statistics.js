import './Statistics.css';

const StatsList = ({ stats }) => {
  // console.log('stats :>> ', stats);
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title ? title : 'Upload stats'}</h2>
      <StatsList stats={stats} />
    </section>
  );
};

export default Statistics;
