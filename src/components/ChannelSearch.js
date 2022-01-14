/** @format */

import { useEffect, useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import SearchIcon from '../assets/search.svg';
import ResultsDropdown from './ResultsDropdown';

const ChannelSearch = ({ setToggleContainer }) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [teamChannels, setTeamChannels] = useState([]);
  const [directChannels, setDirectChannels] = useState([]);
  const { client, setActiveChannel } = useChatContext();

  const getChannels = async (text) => {
    try {
      const channelRes = client.queryChannels({
        type: 'team',
        name: { $autocomplete: text },
        members: { $in: [client.userID] },
      });

      const userRes = client.queryUsers({
        id: { $ne: client.userID },
        name: { $autocomplete: text },
      });

      const [channels, { users }] = await Promise.all([channelRes, userRes]);

      if (channels.length) {
        setTeamChannels(channels);
      }

      if (users.length) {
        setDirectChannels(users);
      }
    } catch (error) {
      setSearch('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearch(e.target.value);
    getChannels(e.target.value);
  };

  const setChannel = (channel) => {
    setSearch('');
    setActiveChannel(channel);
  };

  useEffect(() => {
    if (!search) {
      setTeamChannels([]);
      setDirectChannels([]);
    }
  }, [search]);

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <img src={SearchIcon} alt="search" />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {search && (
        <ResultsDropdown
          teamChannels={teamChannels}
          directChannels={directChannels}
          loading={loading}
          setChannel={setChannel}
          setSearch={setSearch}
          setToggleContainer={setToggleContainer}
        />
      )}
    </div>
  );
};

export default ChannelSearch;
