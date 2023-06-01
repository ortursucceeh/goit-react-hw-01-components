import css from './FriendList.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FriendItem = ({ friend }) => {
  return (
    <li key={friend.id} className={clsx(css['friend-list__item'])}>
      <span
        className={clsx(css['friend__status'], {
          [css.online]: friend.isOnline,
        })}
      >
        {friend.isOnline ? 'Online' : 'Offline'}
      </span>
      <img
        className={clsx(css['friend__avatar'])}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={clsx(css['friend__name'])}>{friend.name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css['friend-list'])}>
      {friends.map((friend, index) => (
        <FriendItem key={index} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FriendList;
