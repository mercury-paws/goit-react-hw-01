import Profile from "./Profile/Profile.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import FriendList from "./FriendList/FriendList.jsx";

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
