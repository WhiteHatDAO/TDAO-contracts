import React from "react";
import talentImage from "../../assets/talent.png";
import etherImage from "../../assets/ethereum.png";
import authorImage from "../../assets/author.png";
import heartImage from "../../assets/heart.png";
import { useHistory } from "react-router-dom";

export const ArticleCard = () => {
  const history = useHistory();

  return (
    <div className="flex justify-center mx-2 my-4">
      <div className="rounded-2xl shadow-lg max-w-sm p-4" style={{background: '#F1F1F1'}}>
        <a href="#!">
          <img className="rounded-xl cursor-pointer" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" onClick={() => history.push('/article')} />
        </a>
        <div className="pt-4 flex flex-col">
          <div className="flex flex-row justify-between items-start">
            <div className="text-2xl text-left font-bold cursor-pointer" onClick={() => history.push('/article')} >Metaverse Superheroes</div>
            <div className="flex flex-row items-center">
              <img src={talentImage} className="-mr-2"></img>
              <img src={etherImage}></img>
            </div>
          </div>
          <div className="pt-8 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center cursor-pointer" onClick={() => history.push('/author')}>
              <img src={authorImage}></img>
              <div className="pl-2 text-xl text-darkgray">Author</div>
            </div>
            <img src={heartImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
