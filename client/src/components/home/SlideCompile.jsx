import React from "react";

import Slide from "./Slide";

function SlideCompile({ products }) {
  return (
    <>
      <Slide heading={"Deals of the Day"} products={products} />
    </>
  );
}

export default SlideCompile;
