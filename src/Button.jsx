import React from "react";

function Button({ children }) {
  return (
    <button className="bg-orange-400 text-white py-[10px] px-[15px] flex rounded items-center">
      {children}
    </button>
  );
}

export default Button;
