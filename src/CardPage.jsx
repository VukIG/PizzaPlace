import CartItems from "./CartItems";
function CardPage() {
  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      <CartItems/>
    </div>
  );
}

export default CardPage;