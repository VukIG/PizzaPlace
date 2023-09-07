import AmountButton from "./AmountButton";
import { useCart } from "./Context";

function RandomItem({ data }) {
  const { cartItems } = useCart();
  const { name, description, id, price, imageUrl } = data;
  const itemInCart = cartItems.find((item) => item.name === name);
  return (
    <div className="flex gap-5 bg-white flex-col p-5 w-full rounded">
      <img className="w-full object-cover rounded h-72" src={imageUrl} alt="" />
      <div className="py-3">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="italic font-normal">{description}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="text-orange-400 text-xl font-bold">${price}</p>
        <div>
          {itemInCart ? (
            <AmountButton
              name={name}
              price={price}
              amount={itemInCart.count}
              id={id}
            />
          ) : (
            <AmountButton name={name} price={price} amount={0} id={id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default RandomItem;
