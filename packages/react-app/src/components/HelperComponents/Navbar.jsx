import { Image } from "antd";
import { Link } from "react-router-dom";
import discord from "../../assets/discord.png";
import profile from "../../assets/profile-icon.png";
import logo from "../../assets/talent-logo.png";
import twitter from "../../assets/twitter.png";

{
  /* Image Import */
}

function Navbar() {
  return (
    <nav className="flex flex-row items-center">
      {/* Navbar Left Items */}
      <div className="py-6 basis-2/3 flex ">
        <Image src={logo} alt="talent" width={150} height={35} layout="fixed" />

        {/* Menu Items */}
        <ul className="flex items-center space-x-5 uppercase">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>Browse</li>
        </ul>
      </div>

      {/* Navbar Right Items */}
      <div className="flex items-center justify-end space-x-3">
        {/* Social Media Icons */}
        <div className="flex space-x-5">
          <Image className="pr-5" src={twitter} alt="twitter logo" width={30} height={30} layout="fixed" />
          <Image src={discord} alt="discord logo" width={30} height={30} layout="fixed" />
          <Image src={profile} alt="discord logo" width={30} height={30} layout="fixed" />
        </div>
        {/* Button */}
        <a
          className="inline-block bg-red-500 text-white hover:bg-red-600 px-8 py-2 rounded-3xl shadow-lg uppercase tracking-wider font-semibold text-sm"
          href="#"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
