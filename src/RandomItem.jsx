import Button from "./Button";
import { FaPlus } from "react-icons/fa";
function RandomItem({ title, desc, price, img }) {
  return (
    <div
      className="flex gap-5 bg-white flex-col  
    p-5 w-full rounded"
    >
      <img className="w-full object-cover rounded h-72" src={img} alt="" />
      <div className="py-3">
        <h1 className=" text-xl font-bold">{title}</h1>
        <p className="italic font-normal">{desc}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-orange-400 text-xl font-bold">${price}</p>
        <Button>
          <div className="flex gap-3 align-middle justify-center items-center">
            <span>Add to cart</span>
            <FaPlus />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default RandomItem;
