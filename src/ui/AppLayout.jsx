import { Outlet } from "react-router-dom";
import Header from "../Header";

function AppLayout() {
  return (
    <div className="font-[Inter] bg-stone-200">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
