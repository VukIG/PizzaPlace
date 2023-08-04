
function Button({name ,icon}) {
  return (
    <button className="bg-orange-400 text-white py-[10px] px-[15px] flex rounded items-center">
      <p className="p-1">{name}</p>
      {icon}
    </button>
  );
}

export default Button;
