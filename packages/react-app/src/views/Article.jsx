import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import article_back from "../assets/article_back.png";
import matic from "../assets/matic.png"
import ethereum from "../assets/ethereum.png"
import author_pro from "../assets/author_pro.png";
import { SimilarArticleCard } from "../components/HelperComponents/SimilarArticleCard";

const tabType = {
  detail: "details",
  history: "history",
  author: "authors",
};

const Article = ({ readContracts, writeContracts, address, tx }) => {
  const [tab, setTab] = useState(tabType.detail);
  const [article, setArticle] = useState({});

  const getArticle = () => {
    // tx(
    //   readContracts &&
    //   readContracts.
    // )
  };

  useEffect(() => {
    getArticle();
  }, [address]);

  const mintArticle = () => {
    // mint the article
    console.log("Mint clicked: ", article);
  };

  const scrollTop = () => {
    document.documentElement.scrollTo({
      // @ts-ignore
      top: 0,
      behavior: "smooth",
    })
  };

  useEffect(() => {
    scrollTop();
  }, [])

  return (
    <div>
      <div className="p-4 sm:p-8 md:p-10 xl:p-20 overflow-hidden">
        <div className="flex flex-col 2xl:flex-row items-start justify-between text-left space-x-8">
          <div className="pt-4 flex flex-col items-start space-y-4">
            <div className="flex flex-col-reverse lg:flex-col items-start space-y-4">
              <div className="pt-4 text-5xl lg:text-7xl font-bold">
                Decentralization the new way of Life;
                <br />
                Tezos Foundation.
              </div>
              <div className="rounded-full p-2 w-full bg-gray flex flex-row items-center">
                <img src={author_pro} className="w-20 rounded-full" alt="author pro"></img>
                <div className="pl-4 flex flex-col place-content-between">
                  <div className="text-3xl font-bold">Saintlucas James Andrew</div>
                  <div className="text-darkgray font-bold text-sm">
                    Oxford Author - Harvard Scholar - Best Selling Author.
                  </div>
                </div>
              </div>
            </div>
            <img className="lg:hidden rounded-2xl w-full" src={article_back} alt="article back"></img>
            <div className="lg:hidden text-lg text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus dui non condimentum pellentesque.
              Nam in nunc consectetur, mollis leo et, viverra felis. Nulla facilisi. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas vel ultricies leo. Suspendisse varius, odio sed luctus cursus, ex
              turpis condimentum felis, eu euismod nisl quam vitae purus. Curabitur id pulvinar elit, vitae porta nisi.
              Donec vitae varius lectus, ac pharetra justo. Mauris in tempor urna. Maecenas scelerisque fringilla massa
              nec ultricies.
            </div>
            <div className="lg:hidden text-primary text-left font-bold">Read more</div>
            <div className="border-b w-full border-gray">
              <ul className="flex cursor-pointer font-bold mb-0">
                <li
                  className={
                    tab === tabType.detail
                      ? "py-2 px-6 rounded-t-lg border-b-2 border-primary"
                      : "py-2 px-6 rounded-t-lg"
                  }
                  onClick={() => setTab(tabType.detail)}
                >
                  Details
                </li>
                <li
                  className={
                    tab === tabType.history
                      ? "py-2 px-6 rounded-t-lg border-b-2 border-primary"
                      : "py-2 px-6 rounded-t-lg"
                  }
                  onClick={() => setTab(tabType.history)}
                >
                  History
                </li>
                <li
                  className={
                    tab === tabType.author
                      ? "py-2 px-6 rounded-t-lg border-b-2 border-primary"
                      : "py-2 px-6 rounded-t-lg"
                  }
                  onClick={() => setTab(tabType.author)}
                >
                  Authors
                </li>
              </ul>
            </div>
            {tab === tabType.detail ? (
              <div className="w-full border-b border-gray pb-4 flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="text-lg text-darkgray">Blockchain</div>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="rounded-full p-1 bg-gray flex flex-row items-center cursor-pointer">
                      <img src={matic} width={26} height={26} alt="matic"></img>
                      <div className="pl-2 text-lg">Matic (Polygon)</div>
                    </div>
                    <div className="rounded-full p-1 bg-gray flex flex-row items-center cursor-pointer">
                      <img src={ethereum} width={26} height={26} alt="ethereum"></img>
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
                <div className="py-4 flex flex-row items-center text-gray space-x-4">
                  <img className="rounded-full" src={author_pro} alt="author pro" width={48} height={48}></img>
                  <div className="flex flex-col text-lightgray">
                    <div className="text-lg">Listed First edition</div>
                    <div className="text-lg">
                      by <span className="text-black">SaintLucas James Andrew</span>
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-row items-center text-gray space-x-4">
                  <img className="rounded-full" src={author_pro} alt="author pro" width={48} height={48}></img>
                  <div className="flex flex-col text-lightgray">
                    <div className="text-lg">Listed First edition</div>
                    <div className="text-lg">
                      by <span className="text-black">SaintLucas James Andrew</span>
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-row items-center text-gray space-x-4">
                  <img className="rounded-full" src={author_pro} alt="author pro" width={48} height={48}></img>
                  <div className="flex flex-col text-lightgray">
                    <div className="text-lg">Listed First edition</div>
                    <div className="text-lg">
                      by <span className="text-black">SaintLucas James Andrew</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col text-left">
                <div className="py-4 flex flex-row items-center text-gray space-x-4 cursor-pointer">
                  <img className="rounded-full" src={author_pro} alt="author pro" width={48} height={48}></img>
                  <div className="text-lg text-black">SaintLucas James Andrew</div>
                </div>
                <div className="py-4 flex flex-row items-center text-gray space-x-4 cursor-pointer">
                  <img className="rounded-full" src={author_pro} alt="author pro" width={48} height={48}></img>
                  <div className="text-lg text-black">Delman Nick</div>
                </div>
              </div>
            )}
            <div className="flex flex-row items-center space-x-4">
              <Tooltip title="Export Article">
                <div
                  className="px-8 py-2 bg-primary text-white text-sm rounded-full cursor-pointer"
                  onClick={e => {
                    console.log("Export clicked: ", e);
                  }}
                >
                  EXPORT
                </div>
              </Tooltip>
              <Tooltip title="Mint Article">
                <div
                  className="px-8 py-2 text-black text-sm rounded-full"
                  style={{ backgroundColor: "rgba(180, 28, 46, 0.15)", cursor: "pointer" }}
                  onClick={e => {
                    mintArticle();
                  }}
                >
                  MINT
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="hidden 2xl:block mx-auto">
            <img className="rounded-2xl w-full " src={article_back} alt="article back"></img>
          </div>
        </div>
        <div className="hidden lg:block my-8 max-w-screen-lg mx-auto text-lg text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus dui non condimentum pellentesque. Nam
          in nunc consectetur, mollis leo et, viverra felis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas vel ultricies leo. Suspendisse varius, odio sed luctus cursus, ex turpis condimentum
          felis, eu euismod nisl quam vitae purus. Curabitur id pulvinar elit, vitae porta nisi. Donec vitae varius
          lectus, ac pharetra justo. Mauris in tempor urna. Maecenas scelerisque fringilla massa nec ultricies.
          Vestibulum felis justo, condimentum ut ornare id, suscipit id sem. Cras neque mi, luctus pulvinar suscipit et,
          facilisis ut nulla. Curabitur quis dapibus justo. Quisque eu finibus lacus. In efficitur ut augue ac finibus.
          Pellentesque eleifend aliquam neque, non maximus erat. Suspendisse vitae ante justo. Mauris dapibus arcu eu
          sollicitudin fermentum. Proin eu diam mi. Sed blandit neque luctus finibus laoreet. Sed non pretium erat.
          Pellentesque eleifend maximus eleifend. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Ut feugiat mattis lacus. Maecenas id elit vel eros venenatis viverra. Phasellus
          aliquet est consectetur ante laoreet suscipit. Integer sapien magna, venenatis mollis sem eu, gravida
          facilisis odio. Nullam malesuada sem quis erat feugiat lobortis. Morbi lobortis ligula ut justo commodo, sed
          egestas enim suscipit. Proin ac velit elit. Aliquam ut lorem sapien. Aenean ultricies id turpis quis congue.
          Nam rutrum tellus ac nunc accumsan, vel faucibus ipsum euismod. Suspendisse bibendum quam nec fermentum
          congue. Proin ac ex eget felis porta blandit. Aenean a neque elementum, molestie mauris eu, varius dolor.
          Vivamus iaculis risus id efficitur aliquet. Vestibulum lacinia lacus quis turpis imperdiet molestie eu vel
          ligula. Maecenas malesuada aliquam commodo. Phasellus aliquet est consectetur ante laoreet suscipit. Integer
          sapien magna, venenatis mollis sem eu, gravida facilisis odio. Nullam malesuada sem quis erat feugiat
          lobortis. Morbi lobortis ligula ut justo commodo, sed egestas enim suscipit. Proin ac velit elit. Aliquam ut
          lorem sapien. Aenean ultricies id turpis quis congue. Nam rutrum tellus ac nunc accumsan, vel faucibus ipsum
          euismod. Suspendisse commodo.
        </div>
        <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
          <SimilarArticleCard></SimilarArticleCard>
        </div>
      </div>
    </div>
  );
};

export default Article;
