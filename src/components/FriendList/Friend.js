import PropTypes from 'prop-types';
import { Card, Online, NotOnline, Avatar } from './Friends.style';

function Friend({ id, avatar, name, isOnline }) {
  return (
    <Card>
      {isOnline ? <Online></Online> : <NotOnline></NotOnline>}
      <Avatar src={avatar} alt="User avatar" />
      <h2> {name}</h2>
    </Card>
  );
}

Friend.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friend;
