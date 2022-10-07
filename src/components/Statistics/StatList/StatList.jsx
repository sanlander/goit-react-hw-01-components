import PropTypes from 'prop-types';
import { StatElement } from '../StatElement/StatElement';
import { StatisticsCard, Title, ListElement } from './StatList.styled';

export const StatList = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <ListElement>
        {stats.map(({ id, label, percentage }) => (
          <StatElement key={id} label={label} percentage={percentage} />
        ))}
      </ListElement>
    </StatisticsCard>
  );
};

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
