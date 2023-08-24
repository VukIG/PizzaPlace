import MenuItem from "./MenuItem";
import { FaPlus } from "react-icons/fa";
import data from './mockData';
function Menu() {
  console.log(data)

  return (
    
    <div className="w-full flex flex-col justify-start h-full bg-slate-200 p-5 mb-5">
      <h1 className="text-4xl mb-10 font-bold">Discover menu</h1>
      {data.map(element => {
        return element.map( part => {
          return <MenuItem name="Add to cart" icon={<FaPlus/>} img={part.imageUrl} title={part.name} desc={part.description} key={crypto.randomUUID()} />
        })
      })}
    </div>
  );
}

export default Menu;
