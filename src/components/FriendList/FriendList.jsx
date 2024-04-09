import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./friendList.module.css";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map((friend) => (
          <li key={friend.id} className={css.friendItem}>
            <FriendListItem friendItem={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
