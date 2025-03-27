import React from "react";

const Button = ({ buttonItem }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition flex-shrink-0">
      {buttonItem.name}
    </button>
  );
};

export default Button;
