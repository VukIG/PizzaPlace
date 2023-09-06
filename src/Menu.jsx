import MenuItem from "./MenuItem";
import data from "./mockData";
function Menu() {
  return (
    <div className="w-full flex flex-col justify-start h-full bg-slate-200 p-5 mb-5">
      <h1 className="text-4xl mb-10 font-bold">Discover menu</h1>
      {data.map((element) => {
        return <MenuItem key={element.id} data={element} />;
      })}
    </div>
  );
}

export default Menu;
