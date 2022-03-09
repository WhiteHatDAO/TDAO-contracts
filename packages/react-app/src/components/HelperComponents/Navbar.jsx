import { Image } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import discord from "../../assets/discord.png";
import twitterImg from "../../assets/twitter.png";
import profile from "../../assets/profile.png";
import logo from "../../assets/talent-logo.png";
import { Account } from "../../components";
import divideImage from "../../assets/divide.png";
import menuIconImage from "../../assets/menu_icon.png";
import menuImage from "../../assets/menu.png";
import { useEffect, useState } from "react";
import { getAuthorData } from "../../utils/utils";
import axios from "axios";

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
  userMenuOpen,
  handleUserMenuOpen
}) {
  const history = useHistory();
  const location = useLocation();

  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(userMenuOpen);
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const goToPage = (locationPath) => {
    setNavPanelOpen(false);
    history.push(locationPath);
  }

  const handleMenuOpen = () => {
    setMenuOpen(true)
    handleUserMenuOpen(true);
  }

  useEffect(async() => {
    if (address === undefined || address === '') return;
    const params = new URLSearchParams([['walletId', address]]);
    const data = getAuthorData(params);
    if(data !== null) {
      setTwitter(data.twitter);
    }
  }, [address])

  return (
    <div className="relative bg-white border-b" style={{ position: 'sticky', top: '0', zIndex: '20', borderColor: '#c1c1c1' }}>
      <nav className="mx-4 sm:mx-8 md:mx-10 xl:mx-20 flex flex-row items-center justify-between">
        {/* Navbar Left Items */}
        {
          location.pathname === '/user' && (
            <img className="xl:hidden" src={menuImage} onClick={handleMenuOpen}></img>
          )
        }
        <div className="flex items-center py-5">
          <img className="cursor-pointer" src={logo} alt="Talent DAO Logo" layout="fixed" onClick={() => goToPage('/')} />
          <div className="hidden xl:flex items-center">
            <img className="px-8" src={divideImage} alt="div"></img>
            <div className="flex items-center space-x-7">
              <div onClick={() => goToPage("/")} className={location.pathname === '/' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>HOME</div>
              <div onClick={() => goToPage("/about")} className={location.pathname === '/about' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>ABOUT</div>
              <div onClick={() => goToPage("/contact")} className={location.pathname === '/contact' ? 'text-lg text-primary font-semibold cursor-pointer whitespace-nowrap' : 'text-lg whitespace-nowrap cursor-pointer'}>CONTACT US</div>
              <div onClick={() => goToPage("/browse")} className={location.pathname === '/browse' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>BROWSE</div>
              {/* <div onClick={() => goToPage("/author")} className={location.pathname === '/author' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Author</div>
              <div onClick={() => goToPage("/article")} className={location.pathname === '/article' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Article</div> */}
            </div>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-end space-x-16">
          <div className="flex space-x-8">
            <a href={twitter}><img src={twitterImg} alt="twitter logo" width={40} height={40} layout="fixed" /></a>
            <img src={discord} alt="discord logo" width={40} height={40} layout="fixed" />
            <img onClick={() => goToPage("/user/author")} className="cursor-pointer" src={profile} alt="profile icon" width={40} height={40} layout="fixed" />
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
        <div className="xl:hidden" onClick={() => setNavPanelOpen(!navPanelOpen)}>
          <img src={menuIconImage} alt="menu icon" width={40} height={40} layout="fixed" />
        </div>
      </nav>

      {
        navPanelOpen && (
          <div className="absolute top-25 w-full h-screen bg-white flex flex-col py-4 px-4 sm:px-8">
            <div className="flex flex-col space-y-4 text-left">
              <div onClick={() => goToPage("/")} className={location.pathname === '/' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>HOME</div>
              <div onClick={() => goToPage("/about")} className={location.pathname === '/about' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>ABOUT</div>
              <div onClick={() => goToPage("/contact")} className={location.pathname === '/contact' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>CONTACT US</div>
              <div onClick={() => goToPage("/browse")} className={location.pathname === '/browse' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>BROWSE</div>
              {/* <div onClick={() => goToPage("/author")} className={location.pathname === '/author' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Author</div>
              <div onClick={() => goToPage("/article")} className={location.pathname === '/article' ? 'text-lg text-primary font-semibold cursor-pointer' : 'text-lg cursor-pointer'}>Article</div> */}
            </div>
            <div className="pt-4 flex flex-row items-center space-x-4">
              <img src={twitter} alt="twitter logo" width={40} height={40} layout="fixed" />
              <img src={discord} alt="discord logo" width={40} height={40} layout="fixed" />
              <img src={profile} alt="profile icon" width={40} height={40} layout="fixed" />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
