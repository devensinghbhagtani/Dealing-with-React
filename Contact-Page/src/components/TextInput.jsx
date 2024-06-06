import React from "react";

function TextInput({ text, height, htmlfor }) {
  return (
    <div>
      <div className="mt-4 relative ">
        <label
          className="font-[500] absolute left-5 top-[-12px] bg-white px-1"
          htmlFor={htmlfor}
        >
          {text}
        </label>
        <input
          type=""
          name={htmlfor}
          className={`w-[100%]  border-2 border-black flex text-black px-4 py-2 rounded-md ${height}`}
        />
      </div>
    </div>
  );
}

export default TextInput;
