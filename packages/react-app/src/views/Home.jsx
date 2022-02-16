import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { AuthorCard } from "../components/HelperComponents/AuthorCard";
import Footer from "../components/HelperComponents/Footer";
import LatestArticles from "../components/HelperComponents/LatestArticles";
// import Navbar from "../components/HelperComponents/Navbar";
import Newsletter from "../components/HelperComponents/Newsletter";
import profileImage from "../assets/profile.png"
import Splash from "../components/HelperComponents/Splash";

import featuredImage from "../assets/featured_author.png";
import partnershipImage from "../assets/partnership.png";
import arrowRightImage from "../assets/ArrowRight.png";
import authorImage from "../assets/author.png";
import lineImage from "../assets/line.png";
/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice

  return (
    <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-20 overflow-hidden">
      <Splash />
      <div className="flex flex-row items-center pt-6">
        <img src={profileImage} className="pr-2"></img>
        <div className="text-black font-semibold text-2xl">Got Talent? <span className="text-primary">Join Us.</span></div>
      </div>

      {/* Article Component Section */}
      <LatestArticles />

      {/* Featured Author & Updates Section  */}
      <div className="pt-16 grid grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col">
          <div className="text-3xl xl:text-4xl font-bold text-left">
            Featured Author
            <img className="pt-2" src={lineImage}></img>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="rounded-2xl p-4 mr-0 md:mr-8" style={{ boxShadow: '2px 0px 9px rgba(0, 0, 0, 0.15)' }}>
              <img src={featuredImage} className="rounded-xl w-full h-full"></img>
            </div>
            <div className="flex flex-col items-start text-left">
              <div className="text-sm xl:text-lg text-primary hidden md:block">Author</div>
              <div className="pt-2 text-3xl xl:text-4xl font-bold">James Andrew</div>
              <div className="pt-4 text-lg xl:text-xl text-darkgray hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </div>
              <div className="pt-4 flex flex-row items-center text-lg">
                <div className="cursor-pointer rounded-lg font-semibold text-green px-3 py-1 mr-4" style={{ background: 'rgba(60, 188, 0, 0.22)' }}>History</div>
                <div className="cursor-pointer rounded-lg font-semibold text-purple px-3 py-1" style={{ background: 'rgba(113, 1, 255, 0.22)' }}>Romance</div>
              </div>
              <div className="mt-4 cursor-pointer text-2xl text-white bg-primary rounded-full px-8 py-2">VISIT PAGE</div>
            </div>
          </div>
        </div>
        <div className="ml-0 md:ml-4 flex flex-col">
          <div className="text-3xl xl:text-4xl font-bold text-left">
            DAO Updates
            <img className="pt-2" src={lineImage}></img>
          </div>
          <div className="relative mt-8 rounded-2xl" style={{ boxShadow: '2px 0px 9px rgba(0, 0, 0, 0.15)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="demo-dao-update rounded-3xl p-6 lg:p-16">
                <img
                  className="demo-dao-image"
                  src={partnershipImage}
                  alt=""
                />
                <div className="relative flex flex-col">
                  <div className="text-2xl font-bold text-white text-left pt-56">TalentDAO partners with Consensys</div>
                </div>
              </div>
              <div className="px-6 flex flex-col">
                <div className="pt-4 text-left text-xl text-darkgray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>
                <div className="pb-4 flex flex-row justify-between lg:flex-col">
                  <div className="pt-4 flex flex-row items-center text-primary font-semibold text-xl cursor-pointer">
                    <div className="pr-2">Read more</div>
                    <img className="pt-1" src={arrowRightImage}></img>
                  </div>
                  <img className="w-8 pt-4" src={authorImage}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Component */}
      <div className="mt-10">
        <Newsletter />
      </div>

      {/* Footer Component Section */}
      <Footer />
    </div>
  );
}

export default Home;
