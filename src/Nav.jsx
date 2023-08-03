import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" text-white mx-[20px] ">
      <ul className="flex ">
        <li>
          <a to="/" className=" p-[10px] font-[400] font-">
            Home
          </a>
        </li>
        <li>
          <a to="/menu" className=" p-[10px] ">
            View
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
