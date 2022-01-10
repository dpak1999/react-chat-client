/** @format */

import Logo from '../assets/logo.png';
import Logout from '../assets/logout.png';

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={Logo} alt="icon" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={Logout} alt="logout" width="30" />
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Chat</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <Header />
      </div>
    </>
  );
};

export default ChannelListContainer;
