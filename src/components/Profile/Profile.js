import css from './Profile.module.css';
import PropTypes from 'prop-types';

const ProfileStats = ({ stats }) => {
  return (
    <ul className={css['stats']}>
      <li>
        <span className={css['stats__label']}>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span className={css['stats__label']}>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span className={css['stats__label']}>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  );
};

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css['profile']}>
      <div className={css['profile__description']}>
        <img src={avatar} alt="avatar" className={css['profile__avatar']} />
        <p className={css['profile__name']}>{username}</p>
        <p className={css['profile__tag']}>@{tag}</p>
        <p className={css['profile__location']}>{location}</p>
      </div>

      <ProfileStats stats={stats} />
    </div>
  );
};

export default Profile;

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
