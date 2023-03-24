import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Divider, Button, Typography } from "@mui/material";
import Countdown from "react-countdown";
// import Arrow from "./Arrow";

function SlideOld({ heading, products, timer, sub }) {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span" className="ml-2 text-xs font-light text-[7f7f7f]">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
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
    <Box className="mx-auto mt-2 flex h-[250px] w-[99%] flex-col bg-white shadow-xl md:h-[350px]">
      <Box
        className={`mt-2 flex flex-row items-center justify-between bg-contain bg-bottom bg-no-repeat px-4 py-2 text-[1.25rem] font-normal xl:text-[1.6rem]`}
      >
        <Box className="flex flex-row items-center">
          <Box className="flex flex-col items-start justify-center">
            <Typography className="font-xl mr-4 text-center font-medium">
              {heading}
            </Typography>
            {sub && (
              <Typography className="mr-4 text-center text-sm opacity-60">
                {sub}
              </Typography>
            )}
          </Box>
          {timer && (
            <Box className="mr-2 flex flex-row items-center text-[#7f7f7f]">
              <img src={timerURL} style={{ width: 24 }} alt="time clock" />
              <Countdown renderer={renderer} date={Date.now() + 42104321} />
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          className="rounded-sm bg-[#2874f0] text-xs font-normal md:text-sm	"
        >
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        className="mt-2"
        centerMode={true}
      >
        {products?.map((data) => {
          return (
            <Box
              key={data.id}
              className="flex w-full cursor-pointer flex-col items-center justify-between p-[15px]"
            >
              <img
                src={data.url}
                alt="bannerImage"
                className="contain h-[100px] w-auto hover:scale-105 md:h-[150px]"
              />
              <Box className="flex w-full flex-col items-center justify-end">
                <Typography className="mt-3 text-center text-sm md:mt-6">
                  {data.title.shortTitle}
                </Typography>
                <Typography className="mt-2 text-center text-xs font-light text-[#388e3c] ">
                  {data.discount}
                </Typography>
                <Typography className="mobInvisible mt-2 text-center text-xs text-[#212121] opacity-[.6]">
                  {data.tagline}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default SlideOld;
