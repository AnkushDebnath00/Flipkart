import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Button } from "@mui/material";
// import Arrow from "./Arrow";

function Slide({ heading, products }) {
  //   const CustomLeftArrow = ({ onClick }) => {
  //     return (
  //       <IconButton
  //         style={{ pointer: "cursor", htmlColor: "red" }}
  //         onClick={onClick}
  //       >
  //         <Arrow />
  //       </IconButton>
  //     );
  //   };

  //   const CustomRightArrow = ({ onClick }) => {
  //     return (
  //       <IconButton
  //         style={{
  //           pointer: "cursor",
  //           htmlColor: "red",
  //         }}
  //         onClick={onClick}
  //       >
  //         <Arrow />
  //       </IconButton>
  //     );
  //   };
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
    <Box className="mx-auto mt-2 flex w-[99%] flex-row ">
      {/* <Box
        className="h-10 max-w-[25%] bg-[url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')] bg-cover bg-bottom bg-no-repeat
"
      > */}
      <Box className="mt-2 flex w-[20%] flex-col items-center justify-center bg-white bg-[url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')] bg-contain bg-bottom bg-no-repeat pt-3 text-[1.25rem] font-normal shadow-xl xl:w-[13%] xl:text-[1.6rem]">
        <h3 className="text-center">{heading}</h3>
        <Button
          variant="contained"
          className="bg-[#2874f0] text-sm font-normal"
        >
          View All
        </Button>
      </Box>
      {/* </Box> */}
      <Carousel
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        className="mt-2 w-[80%] bg-white shadow-xl xl:w-[87%]"
        centerMode={true}
      >
        {products?.map((data) => {
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
    </Box>
  );
}

export default Slide;
