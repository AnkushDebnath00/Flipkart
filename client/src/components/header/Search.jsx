import React from "react";
// components
import { InputBase, IconButton, Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        width: `${props.mob ? "25vw" : "90vw"}`,
        minWidth: "200px",
        height: "36px",
      }}
      className="mx-3 rounded-none"
    >
      <Box className="flex justify-between">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for products, brands and more"
          inputProps={{ "aria-label": "Search for products, brands and more" }}
          className="text-xs"
        />
        <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
          <SearchIcon className="text-[#2874f0]" />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Search;
