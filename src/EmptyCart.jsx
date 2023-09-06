import { Link } from "react-router-dom";
import Button from "./Button";
function getId() {
  return Math.random() * 10;
}
function EmptyCart() {
  return (
    <div className="grid w-full h-[80vh] place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl mb-5">Your Cart is Empty</h1>
        <Link to={`/menu/details/${getId()}`}>
          <Button className="text-center">Start ordering</Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
