function Input({ heading, placeholder, type, name, value, onChange }) {
  return (
    <div>
      <h1 className="text-xl">{heading}</h1>
      <input
        className="h-12 py-7 px-3 my-4 text-xl w-full"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
