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

export default Statistics;
