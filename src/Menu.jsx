import Item from "./Item";
function Menu() {
  return (
    <div className="w-full h-full bg-slate-200 p-[25px]">
      <h1 className="text-4xl mb-5 font-bold">Discover menu</h1>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Menu;
