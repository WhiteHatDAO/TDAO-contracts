import React from "react";
import Footer from "../components/HelperComponents/Footer";
import LatestArticles from "../components/HelperComponents/LatestArticles";
// import Navbar from "../components/HelperComponents/Navbar";
import Newsletter from "../components/HelperComponents/Newsletter";
import Splash from "../components/HelperComponents/Splash";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Splash />
      <h3>
        Got Talent? <span className="text-red-700">Join Us</span>
      </h3>

      {/* Article Component Section */}
      <LatestArticles />

      {/* Featured Author & Updates Section  */}
      <div className="flex">
        <div className="w-1/2">
          <h2>Featured Author</h2>
        </div>
        <div className="w-1/2">
          <h2>DAO Updates</h2>
        </div>
      </div>

      {/* Newsletter Signup Component */}
      <Newsletter />

      {/* Footer Component Section */}
      <Footer />
    </div>
  );
}

export default Home;
