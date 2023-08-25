import Button from "./Button";
import { FaPlus } from "react-icons/fa";

function MenuDetails() {
  return (
    <div className="flex rounded gap-12 justify-around items-center">
      <img className="rounded m-5" src="../public/pizzaBanner.jpeg" alt="" />
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl">Vegan Veggie</h1>
          <p>Daiya vegan mozzarella, paired with fresh veggies</p>
          <div className="mt-6">
            <h1>Topings:</h1>
            <ul>
              <li>Mozzarela</li>
              <li>Tomatto</li>
              <li>Onion</li>
              <li>Mushrooms</li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10 justify-between items-center">
          <h1 className="text-orange-400 text-xl">$150</h1>
          <Button>
            Add to cart <FaPlus />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MenuDetails;
