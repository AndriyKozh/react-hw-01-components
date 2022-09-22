import Friend from './Friend';
import friends from './friends';

function FriendList() {
  return (
    <div>
      {friends.map(friend => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </div>
  );
}

export default FriendList;
