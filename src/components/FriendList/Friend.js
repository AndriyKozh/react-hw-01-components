import { Card, Online, NotOnline, Avatar } from './Friends.style';

function Friend(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <Card>
      {isOnline ? <Online></Online> : <NotOnline></NotOnline>}
      <Avatar src={avatar} alt="User avatar" />
      <h2> {name}</h2>
    </Card>
  );
}

export default Friend;
