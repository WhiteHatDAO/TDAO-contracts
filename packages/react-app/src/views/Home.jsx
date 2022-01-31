import { useContractReader } from "eth-hooks";
import React from "react";
import Head from 'next/head'
import Navbar from '../components/HelperComponents/Navbar'
import Footer from '../components/HelperComponents/Footer'
import Newsletter from '../components/HelperComponents/Newsletter'
import Splash from '../components/HelperComponents/Splash'
import LatestArticles from '../components/HelperComponents/LatestArticles'

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Talent DAO</title>
        <meta name="talent dao" content="talent dao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <hr />

      {/* Navbar Component Section */}
      <Navbar />
      <Splash />

      {/* Slider, Component not needed */}
      <h3>Got Talent? <span className="text-red-700">Join Us.</span></h3>

      {/* Article Component Section */}
      <LatestArticles />

      {/* Featured Author & Updates Section  */}
      <div className='flex'>
        <div className='w-1/2'>
          <h2>Featured Author</h2>
        </div>
        <div className='w-1/2'>
          <h2>DAO Updates</h2>
        </div>
      </div>
      
      {/* Newsletter Signup Component */}
      <Newsletter />

      {/* Footer Component Section */}
      <Footer />
    </div>
  )
}

export default Home;
