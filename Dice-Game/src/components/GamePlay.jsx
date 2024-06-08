import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Buttons from "./Buttons";
import Modal from "./Modal";

function GamePlay() {
  const [error, setError] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    const randomNumber = generateRandom(1, 7);
    if (selectedNumber == undefined) {
      setError("एक संख्या चुनें");
    } else {
      if (randomNumber == selectedNumber) {
        setTotalScore((prev) => prev + randomNumber);
      } else {
        setTotalScore((prev) => prev - 2);
      }
      setCurrentDice((prev) => randomNumber);
      setSelectedNumber(undefined);
    }
  };

  return (
    <main>
      <div className="w-[100%] h-[100vh]  left-0 top-0 fixed ">
        <img
          className={`scale-[30%] absolute left-[35%] top-[-35%] opacity-${
            error == "" ? 0 : 100
          } transition-all ease-in`}
          src="./Images/meme.png"
          alt=""
        />
      </div>
      <div className="p-10 relative">
        <div className="flex justify-between">
          <TotalScore totalScore={totalScore} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <Buttons
          setTotalScore={setTotalScore}
          setSelectedNumber={setSelectedNumber}
          setCurrentDice={setCurrentDice}
          setShowModal={setShowModal}
        />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default GamePlay;
