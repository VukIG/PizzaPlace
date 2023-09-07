import { Outlet } from "react-router-dom";
import Header from "../Header";
import { CartProvider } from "../Context";

function AppLayout() {
  
  return (
    <div className="font-[Inter] bg-stone-100">
      <CartProvider>
        <Header />
        <div>
          <Outlet />
        </div>  
      </CartProvider>
      
    </div>
  );
}

export default AppLayout;
