import data from "./mockData";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
function RandomItem() {
  return (
    <div className="flex gap-5 bg-white flex-col  
    p-5 w-full rounded">
      <img 
        className="w-full object-cover rounded h-72"
        src="../src/assets/pizzaBanner.jpeg" 
        alt="" 
      />
      <div className="py-3">
        <h1 className=" text-xl font-bold">Vegan Veggie</h1>
        <p className="italic font-normal">Daiya Vegan mozzarela, paired with fresh veggies </p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-orange-400 text-xl font-bold">$15.00</p>
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
