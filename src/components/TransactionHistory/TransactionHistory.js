import PropTypes from 'prop-types';
import {
  TableContent,
  TableTitle,
  TableInfo,
  TableList,
} from './Transaction.style';
function TransactionHistory({ items }) {
  return (
    <TableContent>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TableList key={item.id}>
              <TableInfo>{item.type}</TableInfo>
              <TableInfo>{item.amount}</TableInfo>
              <TableInfo>{item.currency}</TableInfo>
            </TableList>
          );
        })}
      </tbody>
    </TableContent>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
