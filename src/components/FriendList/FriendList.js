import Friend from './Friend';

import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <div>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Friend
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
