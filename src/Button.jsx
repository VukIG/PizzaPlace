import React from "react";

function Button({ children }) {
  return (
    <button className="bg-orange-400 text-white py-2 px-3 flex rounded items-center">
      <div className="flex items-center">
        {children}
      </div>
    </button>
  );
}

export default Button;
