import React from "react";

function Button({ children }) {
  return (
    <button className="bg-orange-400 text-white py-2 px-3 flex rounded items-center hover:bg-orange-500 duration-200">
      <div className="flex items-center">
        {children}
      </div>
    </button>
  );
}

export default Button;
