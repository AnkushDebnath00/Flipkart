import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, addToCart } from "../../redux/actions/cartActions";
import CartItem from "./CartItem";
// import Price from "./Price";

import { Box, Grid, Typography } from "@mui/material";

function Cart() {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  console.log(cartItems);
  // const buyNow = async () => {
  //   let response = await payUsingPaytm({
  //     amount: 500,
  //     email: "kunaltyagi@gmail.com",
  //   });
  //   var information = {
  //     action: "https://securegw-stage.paytm.in/order/process",
  //     params: response,
  //   };
  //   post(information);
  // };

  return (
    <>
      <Box className="mx-2 my-4 flex max-w-[98vw] flex-col md:mx-10 md:flex-row xl:mx-20">
        {cartItems.length ? (
          <Grid container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Box>
                <Typography className="">
                  My Cart({cartItems.length})
                </Typography>
              </Box>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
            {/* <Price /> */}
          </Grid>
        ) : (
          <Box>Empty</Box>
        )}
      </Box>
    </>
  );
}

export default Cart;
