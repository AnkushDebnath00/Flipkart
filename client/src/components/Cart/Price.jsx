import React from "react";

import { Box, Button, Typography } from "@mui/material";

function Price(cartItems) {
  return (
    <Box className="my-10 xl:my-0 xl:mx-2">
      <Typography className="m-0 border-b-[2px] border-[#f0f0f0] bg-white px-3 pt-5 pb-2 text-base font-semibold text-[#878787] md:px-12">
        PRICE DETAILS
      </Typography>
    </Box>
  );
  //   {
  //     cartItems.map((item) => <CartItem item={item} key={item.id} />);
  //   }
  <Box className="m-0 flex justify-end bg-white px-3 py-5 md:px-12">
    <Button className="rounded-sm bg-[#fb641b] px-12 py-3 text-white md:px-16">
      Place Order
    </Button>
  </Box>;
}

export default Price;
