import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SubmissionCard } from "./SubmissionCard";

const UserSubmissions = ({ address }) => {
  // const [toArticles, goToArticles] = useState(false);
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const getArticles = async () => {
    const server = "http://localhost:4000";
    try {
      const params = new URLSearchParams([["walletId", address]]);
      const res = await axios.get(server + "/api/articles", { params });
      if (res.data.length === 0) {
        console.log("There is no matched data.");
      } else {
        setArticles(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getArticles();
  }, [address]);

  return (
    <div className="my-8">
      {articles.length === 0 ? (
        <div className="flex justify-center">
          <div className="rounded-2xl p-8 bg-white flex flex-col text-left space-y-4">
            <div
              className="rounded-xl text-lg bg-primary text-white text-center cursor-pointer px-4 py-2"
              onClick={() => history.push(`/submit/${address}`)}
            >
              Submit Your First Article
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <SubmissionCard article={article}></SubmissionCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSubmissions;
