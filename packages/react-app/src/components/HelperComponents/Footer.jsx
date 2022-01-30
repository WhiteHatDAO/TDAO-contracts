import Image from "next/image";
import Link from "next/link";
import logo from "../public/talent-logo.png";

function Footer() {
  return (
    <footer>
      <div className="bg-white rounded-2xl py-8 px-36 flex flex-row">
        <div className="basis-1/2">
          {/* Left Section */}
          <Image className="h-3" src={logo} alt="talent dao logo" />
          <div className="flex">
            <div className="pr-6">
              <h3>TalentDAO</h3>
              <hr />
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/subscribe">Subscribe</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Community</h3>
              <hr />
              <ul>
                <li>
                  <Link href="/coming_soon">Token</Link>
                </li>
                <li>
                  <Link href="/governance">Governance</Link>
                </li>
                <li>
                  <Link href="/suggest_feature">Suggest Feature</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2></h2>
        </div>
        <div className="bg-red-200 rounded-3xl p-4">
          <h3>Lets get started</h3>
          <p>Explore the journal of decentralized work</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
