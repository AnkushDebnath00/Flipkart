import React from "react";

import { Box } from "@mui/material";

function Advertisement() {
  return (
    <Box className="mx-2 flex w-[28%] items-center justify-center md:w-[23.5%] xl:w-[16%]">
      <img
        src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
        alt="Advertisement"
        className="h-[250px] object-fill md:h-[350px]"
      />
    </Box>
  );
}

export default Advertisement;
