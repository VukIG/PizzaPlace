import React from "react";
import Header from "./Header";
import Button from "./Button";
function App() {
  return (
    <>
      <div className="font-[Inter]">
        <Header />
        <div className="flex p-[25px] justify-center items-center gap-[25px]">
          <div className="flex flex-col break-words">
            <h1 className="font-[700] text-[48px] leading-[48px]">Freshly baked Pizzas, made with love</h1>
            <p className="text-[16px]	">
              Discover a gastronomic delight of Exquisite Pizzas, crafted with the
              finest ingredients and careful attention to detail
            </p>
            <Button />
          </div>
          <div className="m-[25px]">
            <img className="w-[718.5px] h-[868px]" src="../public/pizzaBanner.jpeg" alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
