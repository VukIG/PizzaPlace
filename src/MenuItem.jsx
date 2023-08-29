import { Link } from "react-router-dom";
import AmountButton from "./AmountButton";
function MenuItem({ title, desc, img, price, id }) {
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
          <AmountButton />
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
