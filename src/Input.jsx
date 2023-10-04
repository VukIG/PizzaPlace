function Input(props) {
  const {heading, placeholder, type, name, value, onChange} = props;
  return (
    <div>
      <label htmlFor={name} className="text-xl">{heading}</label>
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
