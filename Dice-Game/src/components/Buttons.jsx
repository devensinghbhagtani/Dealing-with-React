import React from "react";
import { Button, OutlineButton } from "../styled/Button";

function Buttons({
  setTotalScore,
  setSelectedNumber,
  setCurrentDice,
  setShowModal,
}) {
  return (
    <div className="flex flex-col gap-2 w-min mt-10">
      <Button
        onClick={() => {
          setTotalScore(0);
          setCurrentDice(1);
          setSelectedNumber(undefined);
        }}
      >
        Reset
      </Button>
      <OutlineButton
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Rules
      </OutlineButton>
    </div>
  );
}

export default Buttons;
