/** @format */

import { useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import UserlList from '../UserlList';
import { CloseCreateChannel } from './CloseCreateChannel';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        type="text"
        placeholder="Channel name"
        value={channelName}
        onChange={handleChange}
      />
      <p>Add Members</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || '']);
  const [channelName, setChannelName] = useState('');

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === 'team'
            ? 'Create a new channel'
            : 'Send a direct message'}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === 'team' && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserlList setSelectedUsers={setSelectedUsers} />
    </div>
  );
};

export default CreateChannel;
