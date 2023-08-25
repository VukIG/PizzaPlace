function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-400
    text-white py-2 px-3 flex rounded items-center
    hover:bg-orange-500 duration-200
    "
    >
      {children}
    </button>
  );
}

export default Button;
