import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slide({ heading, products }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  return (
    <div className="mt-4 bg-white shadow-xl">
      <h3 className="ml-4 font-semibold">{heading}</h3>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        className="mx-auto mt-2 w-[99%]"
        centerMode={true}
      >
        {products.map((data) => {
          return (
            <img
              key={data.id}
              src={data.url}
              alt="bannerImage"
              className="contain h-full w-full"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slide;
