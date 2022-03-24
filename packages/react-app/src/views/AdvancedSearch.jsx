import React, { useState, useEffect } from "react";
import search from "../assets/search.svg";
import info from "../assets/info.svg";
import arrow from "../assets/arrowWhite.svg";
import clear from "../assets/clear.svg";
import { SimilarArticleCard } from "../components/HelperComponents/SimilarArticleCard";
import Footer from "../components/HelperComponents/Footer";

const AdvancedSearch = () => {

  return (
    <div className="flex flex-col" style={{ backgroundImage: 'linear-gradient(#fff, #EEEE' }} >
      <div className="relative" style={{ backgroundColor: '#e2e2e2' }}>
        <div className="lg:mx-auto lg:max-w-2xl overflow-hidden relative text-left space-y-8 py-16">
          <div className="mx-4 flex flex-col items-center justify-center space-y-8">
            <div className="w-full flex flex-row items-center rounded-full bg-white text-white cursor-pointer p-2">
              <input type="text" className="w-full px-4 text-black text-lg focus:outline-none"></input>
              <div className="w-40 bg-primary rounded-full py-2 text-sm flex flex-row items-center justify-center">
                <img className="" src={search} width={24} height={24}></img>
                <div>Search</div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start md:items-end space-x-0 md:space-x-8 space-y-4 md:space-y-0">
              <div className="w-full md:w-auto flex flex-col space-y-2">
                <div className="text-sm">Sort by:</div>
                <select
                  id="select-blockchain"
                  name="select-blockchain"
                  className="mt-1 block bg-transparent w-full pl-3 pr-10 py-2 text-lg rounded-xl border border-black"
                >
                  <option>History</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex flex-col space-y-2">
                <div className="text-sm">Category:</div>
                <select
                  id="select-blockchain"
                  name="select-blockchain"
                  className="mt-1 block bg-transparent w-full pl-3 pr-10 py-2 text-lg rounded-xl border border-black"
                >
                  <option>Author</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex flex-col space-y-2">
                <div className="text-sm">Language:</div>
                <select
                  id="select-blockchain"
                  name="select-blockchain"
                  className="mt-1 block bg-transparent w-full pl-3 pr-10 py-2 text-lg rounded-xl border border-black"
                >
                  <option>English</option>
                </select>
              </div>
              <div className="hidden md:flex w-full md:w-auto flex-row items-center pb-4">
                <div className="text-sm" style={{ color: 'rgba(133, 133, 133, 1)' }}>Clear all</div>
                <img className="px-1" src={clear}></img>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start md:items-end space-x-0 md:space-x-8 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/2 flex flex-col space-y-2">
                <div className="text-sm">Journal Title</div>
                <input type="text" className="text-lg rounded-md p-2 focus:outline-none"></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-2">
                <div className="text-sm">ISBN</div>
                <input type="text" className="text-lg rounded-md p-2 focus:outline-none"></input>
              </div>
            </div>
            <div className="md:hidden w-full md:w-auto flex flex-row items-center pb-4">
              <div className="text-sm" style={{ color: 'rgba(133, 133, 133, 1)' }}>Clear all</div>
              <img className="px-1" src={clear}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-10 xl:px-20 overflow-hidden">
        <div className="text-sm pt-8 text-left">28 similar Articles found</div>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-10 xl:px-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdvancedSearch;
