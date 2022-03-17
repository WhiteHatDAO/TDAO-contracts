/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd";
import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import check from "../assets/check.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import ArticleMintCard from "../components/HelperComponents/ArticleMintCard";
import AuthorMark from "../components/HelperComponents/AuthorMark";
import Footer from "../components/HelperComponents/Footer";
import { dataURLtoFile, getAuthorData } from "../utils/utils";


const Author = ({ tx, readContracts, writeContracts, address }) => {
  const history = useHistory();
  const { walletId } = useParams();
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const [memberSince, setMemberSince] = useState(0);
  const [readers, setReaders] = useState([]);
  const [timesCited, setTimesCited] = useState(0);
  const [tipDropDown, setTipDropDown] = useState(false);

  const scrollTop = () => {
    document.documentElement.scrollTo({
      // @ts-ignore
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  const getArticles = async () => {
    try {
      const server = "http://localhost:4000";
      const params = new URLSearchParams([["walletId", walletId]]);
      const articleResponse = await axios.get(server + "/api/articles", { params });
      if (articleResponse.data.success) {
        setArticles(articleResponse.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubscribeChange = () => {
    let list = [...readers];
    if (list.includes(walletId)) {
      list.forEach((element, index, object) => {
        if (element === walletId) {
          object.splice(index, 1);
        }
      });
    } else {
      list.push(walletId);
    }

    setReaders(list);
  };

  useEffect(async () => {
    if (walletId === undefined || walletId === "") return;
    const params = new URLSearchParams([["walletId", walletId]]);
    const data = await getAuthorData(params);
    setAuthor(data);
    getArticles();
  }, [walletId]);

  useEffect(async () => {
    if (author === undefined || author === null) return;
    const cover =
      author?.coverImage?.data !== "" ? dataURLtoFile(author?.coverImage?.data, author?.coverImage?.filename) : "";
    const image = author?.authorImage?.data
      ? dataURLtoFile(author?.authorImage?.data, author?.authorImage?.filename)
      : "";
    setCoverImage(cover !== "" ? URL.createObjectURL(cover) : null);
    setAuthorImage(image !== "" ? URL.createObjectURL(image) : null);

    const date = new Date(author.createdAt);
    const today = new Date();
    const diff = parseInt((today.getTime() - date.getTime()) / (1000 * 3600 * 24));
    setMemberSince(diff);

    let list = [];
    if (!author?.readers.includes(",")) {
      if (author.readers !== "") list.push(author.readers);
    } else {
      list = author.readers.split(",");
      list.forEach((element, index, object) => {
        if (element === "") object.splice(index, 1);
      });
    }

    setReaders(list);
    setTimesCited(author.times_cited);
  }, [author]);

  useEffect(async () => {
    const server = "http://localhost:4000";
    try {
      const res = await axios.put(server + "/api/author", {
        walletId: walletId,
        readers: readers.join(","),
      });
      return res;
    } catch (e) {
      console.error(e);
    }
  }, [readers]);

  useEffect(() => {
    putTimesCited();
  }, [timesCited]);

  const putTimesCited = async () => {
    const times = timesCited + 1;
    try {
      const server = "http://localhost:4000";
      const res = await axios.put(server + "/api/author_times", {
        walletId: walletId,
        timesCited: times,
      });
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!tipDropDown) return;

  }, [tipDropDown])

  const tipAuthor = async (amount) => {
    await tx(
      writeContracts &&
      writeContracts.TalentDaoToken &&
      writeContracts.TalentDaoToken.approve(readContracts?.TalentDaoManager.address, ethers.utils.parseEther(".01")),
      async update => {
        console.log("📡 Transaction Update:", update);
        if (update.status === 1) {
          notification.open({
            message: "TALENT Approved",
            description: "Your TALENT has been approved to tip the Author 😍",
            icon: "🚀",
          });
        }
      },
    );

    await tx(
      writeContracts &&
      writeContracts.TalentDaoManager &&
      writeContracts.TalentDaoManager.tipAuthor(address, (amount * 10 ** 16).toString()),
      async update => {
        console.log("📡 Transaction Update:", update);
        if (update.status === 1) {
          notification.open({
            message: "Author Tipped",
            description: "Your have just tipped the Author 😍",
            icon: "🚀",
          });
        }
      },
    );
  };

  return (
    <>
      {author && articles && (
        <div
          className="p-0 sm:p-8 md:p-10 xl:p-16 overflow-hidden"
          style={{ backgroundImage: "linear-gradient(#fff, #EEEE" }}
        >
          <div
            className="m-4 rounded-2xl flex flex-col bg-white"
            style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.15)" }}
          >
            <img src={coverImage} alt="article cover" className="rounded-2xl w-full h-96 bg-gray"></img>
            <div className="flex flex-col px-12 pb-12">
              <div className="flex flex-col lg:flex-row items-center">
                <img
                  src={authorImage}
                  alt="the author"
                  className="rounded-full outline-white bg-white border-4 border-white w-28 lg:w-56 h-28 lg:h-56 -mt-14 lg:-mt-28"
                  style={{ outlineStyle: "solid", outlineWidth: "4px", outlineOffset: "0" }}
                ></img>
                <div className="pl-0 lg:pl-8 flex flex-col lg:flex-row w-full items-center justify-between">
                  <div className="flex flex-col text-center lg:text-left">
                    <div className="pb-4 text-4xl font-bold">{author.username}</div>
                    <div className="text-lg text-darkgray">{author.bio}</div>
                  </div>
                  <div className="pt-4 lg:pt-0 flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                    <div
                      className="w-40 py-2 rounded-full bg-primary text-white flex flex-row items-center justify-center cursor-pointer"
                      onClick={() => handleSubscribeChange()}
                    >
                      <div>SUBSCRIBE</div>
                      {readers.includes(walletId) && <img src={check}></img>}
                    </div>
                    <div className="relative">
                      <div
                        className="w-40 py-2 rounded-full border border-primary cursor-pointer"
                        style={{ backgroundColor: "rgba(180, 28, 46, 0.15)" }}
                        onClick={e => { setTipDropDown(!tipDropDown) }}
                      >
                        TIP AUTHOR
                      </div>
                      {
                        tipDropDown && (
                          <div className="mt-2 w-40 absolute cursor-pointer flex flex-row items-center justify-between border border-primary rounded-lg overflow-hidden">
                            <div className="w-full py-2 text-primary border-r hover:bg-primary hover:text-white" onClick={() => { tipAuthor(10); setTipDropDown(false) }}>10</div>
                            <div className="w-full py-2 text-primary border-r hover:bg-primary hover:text-white" onClick={() => { tipAuthor(50); setTipDropDown(false) }}>50</div>
                            <div className="w-full py-2 text-primary hover:bg-primary hover:text-white" onClick={() => { tipAuthor(100); setTipDropDown(false) }}>100</div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8 hidden lg:flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-4">
                  <div
                    className="rounded-lg px-4 py-2 text-green"
                    style={{ backgroundColor: "rgba(60, 188, 0, 0.22)" }}
                  >
                    History
                  </div>
                  <div
                    className="rounded-lg px-4 py-2 text-purple"
                    style={{ backgroundColor: "rgba(113, 1, 255, 0.22)" }}
                  >
                    Romance
                  </div>
                  <div
                    className="rounded-lg px-4 py-2 text-cyan"
                    style={{ backgroundColor: "rgba(0, 130, 114, 0.22)" }}
                  >
                    Nature
                  </div>
                  <div className="rounded-lg px-4 py-2 text-red" style={{ backgroundColor: "rgba(255, 1, 1, 0.22)" }}>
                    Sci-Fi
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <img src={twitter} width={40}></img>
                  <img src={linkedin} width={40}></img>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-10 space-x-8">
                <div
                  className="col-span-4 rounded-xl border border-lightgray px-6 py-4 flex flex-col justify-center space-y-2"
                  style={{ backgroundColor: "#f4f4f4", borderColor: "#dfdfdf" }}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-lg" style={{ color: "#909090" }}>
                      Member Since
                    </div>
                    <div className="text-lg">{memberSince > 0 ? `${memberSince} days` : "Today"}</div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-lg" style={{ color: "#909090" }}>
                      Articles Written
                    </div>
                    <div className="text-lg">{articles.length} Articles</div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-lg" style={{ color: "#909090" }}>
                      Subscribed Readers
                    </div>
                    <div className="text-lg">{readers.length} readers</div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-lg" style={{ color: "#909090" }}>
                      Numbers of times Cited
                    </div>
                    <div className="text-lg">{timesCited} times</div>
                  </div>
                </div>
                <div
                  className="col-span-6 text-left rounded-xl border border-lightgray px-6 py-4 flex flex-col space-y-2"
                  style={{ backgroundColor: "#f4f4f4", borderColor: "#dfdfdf" }}
                >
                  <div className="text-lg font-bold">ABOUT ME</div>
                  <div className="text-lg" style={{ color: "#909090" }}>
                    {author.aboutme}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <AuthorMark></AuthorMark>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {articles.map((article, index) => (
              <ArticleMintCard key={index} article={article}></ArticleMintCard>
            ))}
          </div>
          {
            articles.length > 8 && (
              <div className="mx-4 border border-primary rounded-2xl bg-white text-lg font-bold text-primary py-3">
                SHOW MORE
              </div>
            )
          }
          <div className="mx-4 md:mx-0">
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
