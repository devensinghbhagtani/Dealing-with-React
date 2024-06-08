import React, { useRef } from "react";
import { X } from "lucide-react";
import styled from "styled-components";
function Modal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    console.log(e.target);
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className=" mt-10 flex flex-col gap-5 w-[40%]">
        <button onClick={onClose} className="place-self-end ">
          <X size={30} />
        </button>
        <div className="relative bg-zinc-800 text-white border- border-white p-10 rounded-2xl overflow-hidden">
          <h1 className="text-2xl font-[500] mb-4">
            यह खेल खेलने के चरण इस प्रकार हैं:
          </h1>
          <ul className="mt-2 flex flex-col gap-1 ">
            <li className="flex">Choose a number.</li>
            <li>Click on the dice.</li>
            <li>
              If the number you selected matches the dice roll, you earn points
              equal to the dice number.
            </li>
            <li>If your guess is incorrect, 2 points will be deducted.</li>
          </ul>
          <div className=" w-full h-5  bottom-0 left-0"></div>
          <div className="bg-zinc-700 w-full h-9 absolute bottom-0 left-0 text-white justify-center flex items-center ">
            <h1>bhagtanideven@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

const Circle = styled.div`
  background-color: white;
  color: #343434;
  width: 6px;
  height: 6px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50px;
  margin-right: 10px;
`;
