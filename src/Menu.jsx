import MenuItem from "./MenuItem";
function Menu() {
  return (
    <div className="w-full h-full bg-slate-200 p-5">
      <h1 className="text-4xl mb-5 font-bold">Discover menu</h1>
      <MenuItem /> 
      <MenuItem />     
      <MenuItem />     
      <MenuItem />     
      <MenuItem />     
    </div>
  );
}

export default Menu;
