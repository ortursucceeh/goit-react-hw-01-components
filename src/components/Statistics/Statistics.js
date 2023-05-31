import './Statistics.css';

const StatsList = stats => {
  return (
    <ul class="stat-list">
      {stats.map(item => (
        <li key={item.id} class="item">
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = (title, stats) => {
  return (
    <section class="statistics">
      <h2 class="title">{title ? title : 'Upload stats'}</h2>
      <StatsList stats={stats} />
    </section>
  );
};

export default Statistics;
