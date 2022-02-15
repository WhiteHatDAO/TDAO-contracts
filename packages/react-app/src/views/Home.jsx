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

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice

  return (
    <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-20">
      <Splash />
      <div className="flex flex-row items-center pt-6">
        <img src={profileImage} className="pr-2"></img>
        <div className="text-black font-semibold text-2xl">Got Talent? <span className="text-primary">Join Us.</span></div>
      </div>

      {/* Article Component Section */}
      <LatestArticles />

      {/* Featured Author & Updates Section  */}
      {/* <div className="">
        <Row className="mt-8 mb-4">
          <Col span={12}>
            <div className="text-left ml-8 text-4xl ">
              <span className="">Featured Author</span>
              <hr
                className="max-w-xs font-bold mb-6"
                style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }}
              />
              <Row className="mt-5">
                <Col span={12}>
                  <AuthorCard />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div className="text-left ml-8 text-4xl ">
              <Row>
                <Col span={24}>
                  <span>DAO Updates</span>
                  <hr
                    className="max-w-xs font-bold mb-6"
                    style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }}
                  />
                  <div className="flex ml-11 mt-5">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                      <a href="#!">
                        <img
                          className="rounded-t-lg"
                          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                          alt=""
                        />
                      </a>
                      <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Visit Page
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div> */}

      {/* Newsletter Signup Component */}
      {/* <div>
        <Newsletter />
      </div> */}

      {/* Footer Component Section */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
