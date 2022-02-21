import React from "react";
import author_back from "../assets/author_back.png";
import author_pro from "../assets/author_pro.png";
import check from "../assets/check.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import AuthorMark from "../components/HelperComponents/AuthorMark";
import article_image from "../assets/article_img.png";

const Author = () => {
  return (
    <div className="mx-0 sm:mx-8 md:mx-10 xl:mx-16 overflow-hidden">
      <div className="m-4 rounded-2xl flex flex-col bg-white" style={{ boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)' }}>
        <img src={author_back} className="rounded-2xl w-full h-auto"></img>
        <div className="flex flex-col px-12 pb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <img src={author_pro} className="rounded-full outline-white border-4 border-white w-28 lg:w-56 -mt-14 lg:-mt-28" style={{outlineStyle: 'solid', outlineWidth: '4px', outlineOffset: '0'}}></img>
            <div className="pl-0 lg:pl-8 flex flex-col lg:flex-row w-full items-center justify-between">
              <div className="flex flex-col text-center lg:text-left">
                <div className="pb-4 text-4xl font-bold">James Andrew</div>
                <div className="text-lg text-darkgray">Oxford Author, Harvard Scholar</div>
                <div className="text-lg text-darkgray">Best Selling Author, New York Times</div>
              </div>
              <div className="pt-4 lg:pt-0 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                <div className="px-8 py-2 w-full rounded-full bg-primary text-white flex flex-row items-center">
                  <div className="text-lg">SUBSCRIBE</div>
                  <img src={check}></img>
                </div>
                <div className="px-8 py-2 w-full rounded-full border border-primary" style={{ backgroundColor: 'rgba(180, 28, 46, 0.15)' }}>
                  TIP AUTHOR
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 hidden lg:flex flex-row items-center justify-between">
            <div className="flex flex-row space-x-4">
              <div className="rounded-lg px-4 py-2 text-green" style={{ backgroundColor: 'rgba(60, 188, 0, 0.22)' }}>History</div>
              <div className="rounded-lg px-4 py-2 text-purple" style={{ backgroundColor: 'rgba(113, 1, 255, 0.22)' }}>Romance</div>
              <div className="rounded-lg px-4 py-2 text-cyan" style={{ backgroundColor: 'rgba(0, 130, 114, 0.22)' }}>Nature</div>
              <div className="rounded-lg px-4 py-2 text-red" style={{ backgroundColor: 'rgba(255, 1, 1, 0.22)' }}>Sci-Fi</div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <img src={twitter} width={40}></img>
              <img src={linkedin} width={40}></img>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-10 space-x-8">
            <div className="col-span-4 rounded-xl border border-lightgray px-6 py-4 flex flex-col justify-center space-y-2" style={{ backgroundColor: '#f4f4f4', borderColor: '#dfdfdf' }}>
              <div className="flex flex-row items-center justify-between">
                <div className="text-lg" style={{ color: '#909090' }}>Member Since</div>
                <div className="text-lg">5 months</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-lg" style={{ color: '#909090' }}>Articles Written</div>
                <div className="text-lg">20 Articles</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-lg" style={{ color: '#909090' }}>Subscribed Readers</div>
                <div className="text-lg">501 readers</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-lg" style={{ color: '#909090' }}>Numbers of times Cited</div>
                <div className="text-lg">11 times</div>
              </div>
            </div>
            <div className="col-span-6 text-left rounded-xl border border-lightgray px-6 py-4 flex flex-col space-y-2" style={{ backgroundColor: '#f4f4f4', borderColor: '#dfdfdf' }}>
              <div className="text-lg font-bold">ABOUT ME</div>
              <div className="text-lg" style={{ color: '#909090' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed sed. Laoreet id donec ultrices tincidunt arcu non sodales. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Platea dictumst quisque</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <AuthorMark></AuthorMark>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="m-3 lg:m-4 rounded-2xl bg-white flex flex-col space-y-4 p-6">
              <img className="rounded-xl w-full h-auto" src={article_image}></img>
              <div className="text-xl font-bold text-left">Metaverse, NFT & DEFI, the New Wave</div>
              <div className="grid grid-cols-2 space-x-4">
                <div className="bg-primary text-white px-4 py-2 rounded-xl">VIEW</div>
                <div className="border border-primary py-2 rounded-xl" style={{ backgroundColor: 'rgba(180, 28, 46, 0.15)' }}>MINT</div>
              </div>
            </div>
          ))
        }

      </div>
      <div className="mx-4 border border-primary rounded-2xl bg-white text-lg font-bold text-primary py-3">
        SHOW MORE
      </div>
    </div>
  );
};

export default Author;
