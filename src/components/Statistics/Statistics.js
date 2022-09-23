import PropTypes from 'prop-types';
import {
  Card,
  StatisticContent,
  Title,
  StatisticList,
  StatisticItem,
} from './Statistic.style';
function Statistics({ stats, title }) {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <StatisticContent>
        {stats.map(stat => {
          return (
            <StatisticList key={stat.id}>
              <StatisticItem>{stat.label}%</StatisticItem>
              <StatisticItem>{stat.percentage}%</StatisticItem>
            </StatisticList>
          );
        })}
      </StatisticContent>
    </Card>
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
