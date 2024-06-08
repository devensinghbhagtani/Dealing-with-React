import React from "react";

function TotalScore({ totalScore }) {
  console.log(totalScore);
  return (
    <div className="  flex flex-col justify-center align-middle content-center items-center">
      <h1 className="text-8xl font-[500]">{totalScore}</h1>
      <p className="text-2xl font-[500]">Total Score</p>
    </div>
  );
}

export default TotalScore;
