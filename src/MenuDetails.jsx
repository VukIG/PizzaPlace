import { useParams } from "react-router-dom";
import data from "./mockData";
import RandomList from "./RandomList";
import MenuDetailsMain from "./MenuDetailsMain";
function MenuDetails() {
  const { id } = useParams(); // Get the menu item ID from the URL parameter
  const menuItem = data.find((item) => item.id === parseInt(id));
  console.log();
  return (
    <div className="w-full bg-slate-200 p-6">
      <MenuDetailsMain data={menuItem} />
      <div className="py-6 text-4xl font-bold ">You may also like</div>
      <div className="flex">
        <RandomList />
      </div>
    </div>
  );
}

export default MenuDetails;
