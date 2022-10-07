import PropTypes from 'prop-types';
import {
  TransactionSection,
  TransactionTable,
} from './TransactionTable.styled';
import { Items } from '../TransactionItems/TransactionItems';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionSection>
      <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Items key={id} type={type} amount={amount} currency={currency} />
            );
          })}
        </tbody>
      </TransactionTable>
    </TransactionSection>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
