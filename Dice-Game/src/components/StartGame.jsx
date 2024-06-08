import React from "react";
import { Button } from "../styled/Button";

function StartGame({ toggle }) {
  return (
    <div className=" justify-center flex pt-32">
      <div className=" ">
        <img src="./Images/dices.png" alt="" />
      </div>
      <div className="justify-center flex flex-col gap-5 items-end">
        <h1 className="whitespace-nowrap text-8xl font-bold tracking-tight">
          DICE GAME
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  );
}

export default StartGame;
