import PropTypes from 'prop-types';
import {
  Card,
  Photo,
  InfoContent,
  UserName,
  TagLocation,
  ProfilItem,
  Profillist,
  RatingTitl,
  Rating,
} from './Profil.style';
function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <Card>
      <InfoContent>
        <Photo src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TagLocation>{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </InfoContent>

      <ProfilItem>
        <Profillist>
          <RatingTitl>Followers</RatingTitl>
          <Rating>{stats.followers}</Rating>
        </Profillist>
        <Profillist>
          <RatingTitl>Views</RatingTitl>
          <Rating>{stats.views}</Rating>
        </Profillist>
        <Profillist>
          <RatingTitl>Likes</RatingTitl>
          <Rating>{stats.likes}</Rating>
        </Profillist>
      </ProfilItem>
    </Card>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
