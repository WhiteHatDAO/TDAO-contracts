import React from "react";
import authorImage from "../../assets/author.png";
import etherImage from "../../assets/ethereum.png";
import heartImage from "../../assets/heart.png";
import talentImage from "../../assets/talent.png";

export const ArticleCard = () => {
  return (
    <div className="flex justify-center mx-2 my-4">
      <div className="rounded-2xl shadow-lg max-w-sm p-4" style={{ background: "#F1F1F1" }}>
        <a href="#!">
          <img className="rounded-xl" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
        </a>
        <div className="pt-4 flex flex-col">
          <div className="flex flex-row justify-between items-start">
            <div className="text-2xl text-left font-bold">Metaverse Superheroes</div>
            <div className="flex flex-row items-center">
              <img src={talentImage} className="-mr-2" alt="talent"></img>
              <img src={etherImage} alt="ethereum"></img>
            </div>
          </div>
          <div className="pt-8 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <img src={authorImage} alt="author"></img>
              <div className="text-xl text-darkgray">Author</div>
            </div>
            <img src={heartImage} alt="heart"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
