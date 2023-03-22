import React from "react";
import Carousel from "react-multi-carousel";

function Slide({ products }) {
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
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={false}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      className="mx-auto mt-2 w-[99%]"
    >
      {products.map((data) => {
        return (
          <img
            key={data.id}
            src={data.url}
            alt="bannerImage"
            className="contain w-full"
          />
        );
      })}
    </Carousel>
  );
}

export default Slide;
