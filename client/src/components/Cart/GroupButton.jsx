import React, { useState } from "react";

import { ButtonGroup, Button } from "@mui/material";

const GroupedButton = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <ButtonGroup>
      <Button onClick={() => handleDecrement()} disabled={counter === 0}>
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button onClick={() => handleIncrement()}>+</Button>
    </ButtonGroup>
  );
};

export default GroupedButton;
