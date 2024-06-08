import React, { useState } from "react";
import styled from "styled-components";
function NumberSelector({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) {
  const numarray = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <div className="flex flex-col items-end gap-3 ">
      <h2 className="font-bold text-xl ">{error}</h2>
      <div className="flex gap-4">
        {numarray.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => {
              numberSelectorHandler(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <h2 className="font-bold text-xl">Select Number</h2>
    </div>
  );
}

export default NumberSelector;

const Box = styled.div`
  font-size: x-large;
  font-weight: 600;
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
