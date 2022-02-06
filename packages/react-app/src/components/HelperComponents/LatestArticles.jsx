import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArticleCard } from "./ArticleCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LatestArticles = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="flex ml-5 text-3xl">Latest Articles</h2>
        <hr
          className="max-w-xs font-bold mb-6"
          style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }}
        />
        <span>favorites</span>
        <span>following</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>

      <Carousel responsive={responsive}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Carousel>
    </div>
  );
};

export default LatestArticles;
