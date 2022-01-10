/** @format */

import { useState } from 'react';
import SearchIcon from '../assets/search.svg';

const ChannelSearch = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //fetch channels
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
    </div>
  );
};

export default ChannelSearch;
