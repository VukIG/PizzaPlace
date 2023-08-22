import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" text-white mx-[20px] ">
      <ul className="flex ">
        <li>
          <Link to="/" className=" p-[10px] font-[400]">
            Home
          </Link>
        </li>
        <li>
          <Link to="menu" 
           className={({ isActive }) => 
           (isActive ? "p-2.5" : "p-2.5 bg-orange-400")}
         >
            Menu
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
