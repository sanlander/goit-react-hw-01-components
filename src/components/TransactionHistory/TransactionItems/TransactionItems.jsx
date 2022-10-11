import PropTypes from 'prop-types';
import { firstLetterUppercase } from 'utils';

export const Items = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{firstLetterUppercase(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Items.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
