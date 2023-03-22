import React, { useState, useContext } from "react";
// components
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DataContext } from "../../context/DataProvider";
import LoginBox from "../login/LoginBox";
import Profile from "./Profile";

function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  return (
    <Box className="flex flex-row items-center">
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          className="mx-5 rounded-none bg-white px-6 text-[#2874f0] md:px-10"
          onClick={() => setOpen(true)}
        >
          Login
        </Button>
      )}
      <Typography className=" mobInvisible">Become a Seller</Typography>
      <Typography className=" mobInvisible ml-5">More</Typography>
      <a href="https://goo.gl/kY1meC" className="mobVisible">
        <AddBoxIcon />
      </a>
      <Box className="ml-5 flex flex-row">
        <ShoppingCartIcon className="h-5 " />
        <Box component="span" className="mobInvisible font-bold">
          Cart
        </Box>
      </Box>
      <LoginBox open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
}

export default CustomButtons;
