import AmountButton from './AmountButton';

function MenuDetailsMain({ data }) {
  const { name, description, id, price, imageUrl, toppings } = data;

  return (
    <div className="flex rounded gap-12 bg-white justify-center items-center">
      <img className="rounded m-5 h-80 object-cover w-full" src={imageUrl} />
      <div className="flex flex-col justify-center w-full ">
        <div className="flex flex-col justify-start ">
          <h1 className="text-4xl font-bold pb-3">{name}</h1>
          <p>{description}</p>
          <div className="mt-7">
            <h1 className="font-bold">Topings:</h1>
            <ul className="italic list-disc	ml-10">
              {toppings.map((topping) => {
                return <li key={topping.id}>{topping.name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="flex mt-10 justify-between w-full items-center">
          <h1 className="text-orange-400 text-xl font-bold">${price}</h1>
          <AmountButton id={id} />
        </div>
      </div>
    </div>
  );
}

export default MenuDetailsMain;
