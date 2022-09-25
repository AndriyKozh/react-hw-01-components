import Friend from './Friend';

function FriendList({ friends }) {
  return (
    <div>
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </div>
  );
}

export default FriendList;
