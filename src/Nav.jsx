import {
  Link,
  Outlet,
} from "react-router-dom";
import Menu from "./Menu";
function Nav() {
  return (
    <div className=" text-white mx-[20px] ">
      <ul className="flex ">
        <li>
          <Link to="/" className=" p-[10px] font-[400] font-">
            Home
          </Link>
        </li>
        <li>
          <Link to="./Menu.jsx" className=" p-[10px] ">
            Menu
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
