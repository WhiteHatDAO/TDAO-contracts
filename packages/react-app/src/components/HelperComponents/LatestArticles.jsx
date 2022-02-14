import { HeartOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
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
    items: 4,
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
    <div className="ml-5 ml-5">
      <Row className="">
        <Col span={4} className="mb-2 text-3xl ml-2">
          <span className="flex">Latest Articles</span>
          <hr
            className="max-w-xs font-bold mb-6"
            style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }}
          />
        </Col>
        <Col span={4}>
          <span
            onClick={() => {
              console.log("favorites clicked");
            }}
            className="-mt-5 cursor-pointer rounded-lg bg-red-100 border-2 border-red-200 py-1 px-1"
          >
            <span className="">
              {" "}
              <HeartOutlined className="" /> favorites
            </span>
          </span>{" "}
          <span
            className="cursor-pointer rounded-lg bg-blue-100 border-2 border-blue-200 py-1 px-1"
            onClick={() => {
              console.log("following clicked");
            }}
          >
            following
          </span>
        </Col>
        <Col span={10}> </Col>
        <Col span={1} className="ml-11">
          <span
            className="cursor-pointer"
            onClick={() => {
              console.log("click left");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-80"
              fill="#B41C2E"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </span>
        </Col>
        <Col span={1} className="-ml-11">
          <span
            className="cursor-pointer"
            onClick={() => {
              console.log("click right");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-80"
              fill="#B41C2E"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </Col>
      </Row>

      <Carousel responsive={responsive} centerMode={false}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Carousel>
    </div>
  );
};

export default LatestArticles;
