import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { StatList } from 'components/Statistics/StatList/StatList';
import { FriendList } from 'components/FriendList/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionTable/TransactionTable';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
