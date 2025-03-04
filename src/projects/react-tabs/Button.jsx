import React from "react";

function Button({ label, activeTab, index, onClick = () => {} }) {
  return (
    <button
      className={`w-20 py-2 px-4 m-2 cursor-pointer  rounded-md   ${
        activeTab === index
          ? "border-b-4 border-blue-500 text-white bg-black"
          : "text-black bg-white"
      }`}
      onClick={onClick}
    >
      {" "}
      {label}{" "}
    </button>
  );
}

export default Button;
