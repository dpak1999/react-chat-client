/** @format */

import { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';
import InviteIcon from '../assets/invite-icon.svg';

const ListContainer = ({ children }) => (
  <div className="user-list__container">
    <div className="user-list__header">
      <p>User</p>
      <p>Invite</p>
    </div>
    {children}
  </div>
);

const UserItem = ({ user, setSelectedUsers }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="user-item__wrapper"
      onClick={() => {
        if (selected) {
          setSelectedUsers((prevUsers) =>
            prevUsers.filter((prevUser) => prevUser !== user.id)
          );
        } else {
          setSelectedUsers((prevUsers) => [...prevUsers, user.id]);
        }
        setSelected((prevSelected) => !prevSelected);
      }}
    >
      <div className="user-item__name-wrapper">
        <Avatar image={user.image} name={user.fullName || user.id} size={32} />
        <p className="user-item__name">{user.fullName || user.id}</p>
      </div>
      {selected ? (
        <div style={{ marginRight: '1.4rem' }}>
          <img src={InviteIcon} alt="" />
        </div>
      ) : (
        <div
          className="user-item__invite-empty"
          style={{ marginRight: '1.4rem' }}
        />
      )}
    </div>
  );
};

const UserlList = ({ setSelectedUsers }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  const [error, setError] = useState(false);
  const { client } = useChatContext();

  useEffect(() => {
    const getUsers = async () => {
      if (loading) return;
      setLoading(true);

      try {
        const res = await client.queryUsers(
          { id: { $ne: client.userID } },
          { id: 1 },
          { limit: 8 }
        );

        if (res.users.length) {
          setUsers(res.users);
        } else {
          setListEmpty(true);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    if (client) getUsers();
  }, []);

  if (error) {
    return (
      <ListContainer>
        <div className="user-list__message">
          Error loading users. Please try again
        </div>
      </ListContainer>
    );
  }

  if (listEmpty) {
    return (
      <ListContainer>
        <div className="user-list__message">No Users found</div>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {loading ? (
        <div className="user-list__message">Loading users...</div>
      ) : (
        users?.map((user, i) => (
          <UserItem key={i} user={user} setSelectedUsers={setSelectedUsers} />
        ))
      )}
    </ListContainer>
  );
};

export default UserlList;
