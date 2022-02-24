import { Image } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import profile from "../../assets/profile.png";
import logo from "../../assets/talent-logo.png";
import { Account } from "../../components";
import divideImage from "../../assets/divide.png";
import menuIconImage from "../../assets/menu_icon.png";

function Navbar({
  useBurner,
  address,
  localProvider,
  userProvider,
  userSigner,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isContract,
}) {
  const history = useHistory();
  const location = useLocation();

  return (
    <nav className="mx-4 sm:mx-8 md:mx-10 xl:mx-20 flex flex-row items-center justify-between">
      {/* Navbar Left Items */}
      <div className="flex items-center py-5">
        <img src={logo} alt="Talent DAO Logo" layout="fixed" />
        <div className="hidden xl:flex items-center">
          <img className="px-8" src={divideImage} alt="div"></img>
          <div className="flex items-center space-x-7">
            <div onClick={() => history.push("/")} className={location.pathname === '/' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>HOME</div>
            <div onClick={() => history.push("/about")} className={location.pathname === '/about' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>ABOUT</div>
            <div onClick={() => history.push("/contact")} className={location.pathname === '/contact' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>CONTACT US</div>
            <div onClick={() => history.push("/author")} className={location.pathname === '/author' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Author Profile</div>
            <div onClick={() => history.push("/article")} className={location.pathname === '/article' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Article</div>
            {/* <div onClick={() => history.push("/browse")} className={location.pathname === '/browse' ? 'text-xl text-primary font-semibold cursor-pointer' : 'text-xl cursor-pointer'}>BROWSE</div> */}
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-end space-x-16">
        <div className="flex space-x-8">
          <img src={twitter} alt="twitter logo" width={40} height={40} layout="fixed" />
          <img src={discord} alt="discord logo" width={40} height={40} layout="fixed" />
          <img src={profile} alt="profile icon" width={40} height={40} layout="fixed" />
        </div>
        <Account
          useBurner={useBurner}
          address={address}
          localProvider={localProvider}
          userSigner={userSigner}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          blockExplorer={blockExplorer}
        />
      </div>
      <div className="xl:hidden">
        <img src={menuIconImage} alt="menu icon" width={40} height={40} layout="fixed" />
      </div>
    </nav>
  );
}

export default Navbar;
