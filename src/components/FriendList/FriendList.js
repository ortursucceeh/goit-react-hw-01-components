import css from './FriendList.module.css';
import clsx from 'clsx';

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
      {friends.map(friend => (
        <FriendItem friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
