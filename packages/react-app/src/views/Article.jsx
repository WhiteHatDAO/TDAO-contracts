import React from "react";
import author_pro from "../assets/author_pro.png";
import article_back from "../assets/article_back.png";
import matic from "../assets/matic.png"
import ethereum from "../assets/ethereum.png"
import { useState } from "react";

const tabType = {
  detail: 'details',
  history: 'history',
  author: 'authors'
}

const Article = () => {
  const [tab, setTab] = useState(tabType.detail);

  return (
    <div style={{ backgroundImage: 'linear-gradient(#fff, #EEEE' }}>
      <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-20 overflow-hidden">
        <div className="grid grid-cols-2 items-start text-left space-x-8">
          <div className="pt-4 flex flex-col items-start space-y-4">
            <div className="text-7xl font-bold">Decentralization the new way of Life;<br />Tezos Foundation.</div>
            <div className="rounded-full p-2 w-full bg-gray flex flex-row items-center">
              <img src={author_pro} className="w-24 rounded-full"></img>
              <div className="pl-4 flex flex-col py-4">
                <div className="text-3xl font-bold">Saintlucas James Andrew</div>
                <div className="text-darkgray font-bold text-lg">Oxford Author - Harvard Scholar - Best Selling Author.</div>
              </div>
            </div>
            <div className="border-b w-full border-gray">
              <ul className='flex cursor-pointer font-bold mb-0'>
                <li className='py-2 px-6 rounded-t-lg border-b-2 border-primary' onClick={() => setTab(tabType.detail)}>Details</li>
                <li className='py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200' onClick={() => setTab(tabType.history)}>History</li>
                <li className='py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200' onClick={() => setTab(tabType.author)}>Authors</li>
              </ul>
            </div>
            {
              tab === tabType.detail ? (
                <div className="w-full border-b border-gray pb-4 flex flex-col space-y-4">
                  <div className="flex flex-col space-y-4">
                    <div className="text-lg text-darkgray">Blockchain</div>
                    <div className="flex flex-row items-center space-x-4">
                      <div className="rounded-full p-1 bg-gray flex flex-row items-center">
                        <img src={matic} width={26} height={26}></img>
                        <div className="pl-2 text-lg">Matic (Polygon)</div>
                      </div>
                      <div className="rounded-full p-1 bg-gray flex flex-row items-center">
                        <img src={ethereum} width={26} height={26}></img>
                        <div className="pl-2 text-lg">Ethereum</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="text-lg text-darkgray">Dated</div>
                    <div className="flex flex-row items-center">
                      <div className="rounded-full px-4 py-1 bg-gray flex flex-row items-center">
                        <div className="text-lg">January 2015</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : tab === tabType.history ? (
                <div className="flex flex-col text-left">
                  <div className="py-4 flex flex-row items-center text-gray">
                    <img className="rounded-full" src={author_pro} width={44} height={44}></img>
                    <div className="flex flex-col text-lightgray">
                      <div className="text-lg">Listed First edition</div>
                      <div className="text-lg">by <span className="text-black">SaintLucas James Andrew</span></div>
                    </div>
                  </div>
                  <div className="py-4 flex flex-row items-center text-gray">
                    <img className="rounded-full" src={author_pro} width={44} height={44}></img>
                    <div className="flex flex-col text-lightgray">
                      <div className="text-lg">Listed First edition</div>
                      <div className="text-lg">by <span className="text-black">SaintLucas James Andrew</span></div>
                    </div>
                  </div>
                  <div className="py-4 flex flex-row items-center text-gray">
                    <img className="rounded-full" src={author_pro} width={44} height={44}></img>
                    <div className="flex flex-col text-lightgray">
                      <div className="text-lg">Listed First edition</div>
                      <div className="text-lg">by <span className="text-black">SaintLucas James Andrew</span></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col text-left">
                  <div className="py-4 flex flex-row items-center text-gray">
                    <img className="rounded-full" src={author_pro} width={44} height={44}></img>
                    <div className="text-lg text-black">SaintLucas James Andrew</div>
                  </div>
                  <div className="py-4 flex flex-row items-center text-gray">
                    <img className="rounded-full" src={author_pro} width={44} height={44}></img>
                    <div className="text-lg text-black">Delman Nick</div>
                  </div>
                </div>
              )
            }
          </div>
          <img className="rounded-2xl" src={article_back}></img>
        </div>
      </div>
    </div>
  );
};

export default Article;
