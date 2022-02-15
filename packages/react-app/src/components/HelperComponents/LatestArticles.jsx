import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArticleCard} from "./ArticleCard.jsx";
import { Component } from "react";
import prevImage from "../../assets/prev.png";
import nextImage from "../../assets/next.png";

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
          breakpoint: 1300,
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
          breakpoint: 600,
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
        <div className="flex justify-between pt-10 mb-4">
          <div className="flex flex-row items-center">
            <div className="font-bold text-4xl">Latest Articles</div>
          </div>
          <div className="flex justify-center space-x-2 sm:space-x-5 sm:mt-2">
            <img className="w-12" src={prevImage} onClick={this.goPrevious}></img>
            <img className="w-12" src={nextImage} onClick={this.goNext}></img>
          </div>
        </div>
        <div className="roadmap_container">
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
        </div>
      </>
    );
  }
}
