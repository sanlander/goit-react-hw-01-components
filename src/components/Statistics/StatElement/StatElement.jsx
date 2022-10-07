import PropTypes from 'prop-types';
import { ListItem, Label, Percentage } from './StatElement.styled';

export const StatElement = ({ label, percentage }) => {
  return (
    <ListItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ListItem>
  );
};

StatElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
