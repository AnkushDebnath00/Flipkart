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
      <Button
        onClick={() => handleDecrement()}
        disabled={counter === 0}
        className="rounded-l-full"
      >
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button onClick={() => handleIncrement()} className="rounded-r-full">
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupedButton;
