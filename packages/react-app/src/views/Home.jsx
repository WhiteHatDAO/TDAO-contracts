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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mt-1 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="red-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="flex ml-8 -mt-6">
        Got Talent? <span className="text-red-800 ml-2">Join Us</span>
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
