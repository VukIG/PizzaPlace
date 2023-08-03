import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" text-white mx-[20px] ">
      <ul className="flex ">
        <li>
          <Link to="/src/Home.jsx" className=" p-[10px] font-[400] font-">
            Home
          </Link>
        </li>
        <li>
          <Link to="/src/Menu.jsx" className=" p-[10px] ">
            View
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
