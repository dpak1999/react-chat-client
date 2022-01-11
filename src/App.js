/** @format */

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import Auth from './components/Auth';
import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer';

const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const client = StreamChat.getInstance(apiKey);
const authToken = false;

function App() {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} darkMode>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
