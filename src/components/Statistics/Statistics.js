import PropTypes from 'prop-types';

function Statistics({ stats, title }) {
  return (
    <section>
      {title && <h1>{title}</h1>}

      {stats.map(stat => {
        return (
          <ul key={stat.id}>
            <li>{stat.label}</li>
            <li>{stat.percentage}</li>
          </ul>
        );
      })}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
