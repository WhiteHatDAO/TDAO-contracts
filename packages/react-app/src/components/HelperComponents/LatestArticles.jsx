import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArticleCard } from "./ArticleCard.jsx";
import { Component } from "react";
import prevImage from "../../assets/prev.png";
import nextImage from "../../assets/next.png";
import favImage from "../../assets/favourite.png";

export default class LatestArticles extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  goNext() {
    this.slider.slickNext();
  };

  goPrevious() {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 5,
      arrows: false,
      draggable: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1576,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <div className="flex justify-between pt-16 mb-4">
          <div className="flex flex-row items-center">
            <div className="font-bold text-3xl sm:text-4xl pr-4">Latest Articles</div>
            <div className="rounded-md flex flex-row items-center py-1 px-2 mt-2 mr-4 cursor-pointer" style={{ background: 'rgba(180, 28, 46, 0.06)' }}>
              <img src={favImage} className="pr-1"></img>
              <div className="text-primary">Favourites</div>
            </div>
            <div className="rounded-md flex flex-row items-center py-1 px-2 mt-2 cursor-pointer" style={{ background: '#EDEDED' }}>
              <div>Following</div>
            </div>
          </div>
          <div className="hidden md:flex justify-center space-x-2 sm:space-x-5 sm:mt-2">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.5" transform="rotate(-180 30 30)" stroke="#B41C2E" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M36 20.3736L25.1854 29.6433L36 38.9129L36 44.0004L19.25 29.6433L36 15.2861L36 20.3736Z" fill="#B41C2E" />
            </svg>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="#B41C2E" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 39.6264L34.8146 30.3567L24 21.0871L24 15.9996L40.75 30.3567L24 44.7139L24 39.6264Z" fill="white" />
            </svg>

            {/* <img className="w-12" src={prevImage} onClick={this.goPrevious}></img>
            <img className="w-12" src={nextImage} onClick={this.goNext}></img> */}
          </div>
        </div>
        <div className="relative roadmap_container">
          <Slider ref={c => (this.slider = c)} {...settings}>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </Slider>
          <div className="md:hidden absolute top-1/2 left-0">
            <img className="w-12" src={prevImage} onClick={this.goPrevious}></img>
          </div>
          <div className="md:hidden absolute top-1/2 right-0">
            <img className="w-12" src={nextImage} onClick={this.goNext}></img>
          </div>
        </div>
      </>
    );
  }
}
