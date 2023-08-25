import MenuItem from "./MenuItem";
import { FaPlus } from "react-icons/fa";
import data from './mockData';
function Menu() {

  return (
    
    <div className="w-full flex flex-col justify-start h-full bg-slate-200 p-5 mb-5">
      <h1 className="text-4xl mb-10 font-bold">Discover menu</h1>
      {data.map( element => {
        return <MenuItem icon={<FaPlus/>} img={element.imageUrl} title={element.name} desc={element.description} key={element.id} />
      })}
    </div>
  );
}

export default Menu;
