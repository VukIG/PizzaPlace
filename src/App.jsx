import { useState } from "react";
import Logo from "./assets/logo.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex px-[15px] py-[10px] bg-[#1E1E1E] ">
        <div className="">
          <Logo />
          <ul className="inline">
            <li>
              <a href="" className=" p-[10px] font-[400] font-">
                Home
              </a>
            </li>
            <li>
              <a href="" className=" p-[10px] ">
                View
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <button>
            <i>ovde ikonica</i> Cart
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex horizontal">
          <h1>Freshly baked Pizzas, made with love</h1>
          <p>
            Discover a gastronomic delight of Exquisite Pizzas, crafted with the
            finest ingredients and careful attention to detail
          </p>
          <button>Start ordering</button>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
