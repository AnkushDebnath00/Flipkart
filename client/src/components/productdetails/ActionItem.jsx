import React from "react";

import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function ActionItem({ product }) {
  return (
    <Box className=" w-[500px] max-w-[100%]  xl:max-w-[45vw]">
      <Box className="flex items-center justify-center border-2 border-gray-200 p-12">
        <img src={product.detailUrl} alt="productImg" />
      </Box>
      <Box className="my-4 flex items-center justify-between">
        <Button
          variant="contained"
          className="h-[47px] w-[250px] max-w-[46%] rounded-sm bg-[#ff9f00] text-xs xl:h-[55px] xl:text-sm"
        >
          <ShoppingCartIcon className="mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="contained"
          className="h-[47px] w-[250px] max-w-[46%] rounded-sm bg-[#fb641b] text-xs xl:h-[55px] xl:text-sm"
        >
          <FlashOnIcon className="mr-2" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ActionItem;
