import MenuItem from "./MenuItem";
import data from "./mockData";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="w-full flex flex-col justify-start h-full bg-slate-200 p-5 mb-5">
      <h1 className="text-4xl mb-10 font-bold">Discover menu</h1>
      {data.map((element) => {
        const menuData = {
          img: element.img,
          title: element.title,
          desc: element.description,
        };
        return (
          <Link key={element.id} to={{
            pathname: "/details",
            state: { menuData }
          }}>
            <MenuItem
              img={element.imageUrl}
              title={element.name}
              desc={element.description}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
