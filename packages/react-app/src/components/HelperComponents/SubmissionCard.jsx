import React from "react";
import article_back from "../../assets/article_back.png";
import author_pro from "../../assets/author_pro.png";

export const SubmissionCard = () => {
    return (
        <div className="my-3 rounded-xl bg-white p-4 flex flex-col space-y-4" style={{boxShadow: '0px 0px 39px -4px rgba(0, 0, 0, 0.19)'}}>
            <img className="rounded-xl" src={article_back}></img>
            <div className="text-lg font-bold text-left">Metaverse, NFT & DEFI, the New Wave</div>
            <div className="mx-8 rounded-xl border border-black py-2 text-xl font-bold">VIEW</div>
        </div>
    );
};
