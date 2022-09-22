import PropTypes from 'prop-types';

function Friend(props) {
  const { avatar, name, isOnline } = props;
  return (
    <div>
      {isOnline ? <div>red</div> : <div>green</div>}
      <img src={avatar} />
      <h2> {name}</h2>
    </div>
  );
}

export default Friend;
