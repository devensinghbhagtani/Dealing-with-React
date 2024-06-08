import React, { useState } from "react";
function RollDice({ currentDice, rollDice }) {
  return (
    <div className="mt-10  flex flex-col items-center">
      <div
        onClick={() => {
          rollDice();
        }}
      >
        <img
          className="cursor-pointer "
          src={`./Images/dice_${currentDice}.png`}
          alt=""
        />
      </div>
      <h2 className="text-2xl ">Click on Dice to roll</h2>
    </div>
  );
}

export default RollDice;
