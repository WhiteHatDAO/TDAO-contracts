import { Image } from "antd";
import { Link } from "react-router-dom";
import discord from "../../assets/discord.png";
import profile from "../../assets/profile-icon.png";
import logo from "../../assets/talent-logo.png";
import twitter from "../../assets/twitter.png";
import { Account } from "../../components";

{
  /* Image Import */
}

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
  return (
    <nav className="flex place-content-evenly -ml-11">
      {/* Navbar Left Items */}
      <div className="flex px-16 py-5">
        <Image src={logo} alt="Talent DAO Logo" width={150} height={40} layout="fixed" />
        <span className="font-bold ml-10 text-3xl">|</span>
        {/* Menu Items */}
        <ul className="flex items-center px-12 py-2 space-x-5 uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
        </ul>
      </div>

      {/* Navbar Right Items */}
      <div className="flex items-center justify-end space-x-20">
        {/* Social Media Icons */}
        <div className="flex space-x-10">
          <Image src={twitter} alt="twitter logo" width={30} height={30} layout="fixed" />
          <Image src={discord} alt="discord logo" width={30} height={30} layout="fixed" />
          <Image src={profile} alt="profile icon" width={30} height={30} layout="fixed" />
        </div>
        {/* Button */}
        <div className="flex bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-3xl shadow-lg uppercase tracking-wider font-semibold text-sm">
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
      </div>
    </nav>
  );
}

export default Navbar;