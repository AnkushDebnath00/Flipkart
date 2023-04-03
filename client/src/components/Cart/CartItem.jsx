import React from "react";

import { Card, Box, Typography, Button, ListItemIcon } from "@mui/material";
import GroupButton from "./GroupButton";

function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  console.log(item);
  return (
    <Card>
      <Box>
        <img src={item.url} className="h-[110px]" alt="item" />
        <GroupButton />
      </Box>
      {/* <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography> 
        <Typography>
          Seller:RetailNet
          <span>
            <img
              src={fassured}
              style={{ width: 50, marginLeft: 10 }}
              alt="item"
            />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <Typography component="span">₹{item.price.cost}</Typography>
          &nbsp;&nbsp;&nbsp;
          <Typography component="span">
            <strike>₹{item.price.mrp}</strike>
          </Typography>
          &nbsp;&nbsp;&nbsp;
          <Typography component="span">{item.price.discount} off</Typography>
        </Typography>
        <Button onClick={() => removeItemFromCart(item.id)}>Remove</Button>
      </Box> */}
    </Card>
  );
}

export default CartItem;
