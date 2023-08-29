import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Amount from "./Amount";
import { Link } from "react-router-dom";
function MenuItem({ title, desc, img, price, id }) {
  const [count, setCount] = useState(0);
  function changeCount(e) {
    e.stopPropagation();
    e.preventDefault();
    setCount((count) => count + 1);
  }
  return (
    
      <div>
        <Link to={`/menu/details/${id}`}>
          <div className=" rounded-lg flex align-middle items-center bg-white justify-between mb-5">
            
              <div className="flex items-center gap-5">
                <img
                  className="w-[100px] h-[100px] my-5 ml-5 rounded-lg"
                  src={img}
                  alt=""
                />
                <div className="flex flex-col justify-start items-start ">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="py-3 text-sm italic">{desc}</p>
                  <h1 className="font-bold text-orange-400">${price}</h1>
                </div>
              </div>
            
            <div className="mr-5">
              {count > 0 ? (
                <Amount
                  amount={count}
                  onZero={() => {
                    setCount(0);
                  }}
                />
              ) : (
                <Button onClick={changeCount}>
                  <div className="flex gap-3 align-middle justify-center items-center">
                    <span>Add to cart</span>
                    <FaPlus />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </Link>
      </div>
    
  );
}

export default MenuItem;
