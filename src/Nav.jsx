import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="text-white mx-[20px]">
      <ul className="flex">
        <li>
          <NavLink to="/" className="p-[10px] font-[400]">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="p-[10px] font-[400]" to="menu">
            Menu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
