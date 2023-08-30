import Amount from './Amount';
import Button from './Button';

function CartItem({item}) {
  const { name, price, amount } = items; 
  return (
    <div className="flex justify-between py-5 border-b border-black items-center">
            <div className="flex justify-around gap-3 items-baseline ">
                <h1 className='text-3xl'>{amount}</h1><span>X</span><h1 className='text-3xl'>{name}</h1>
            </div>
            <div className="flex justify-around gap-3 items-center">
                <h1 className='font-bold text-3xl'>{price*amount}</h1> <Amount className="h-12" /> <Button className='h-12'>Remove</Button>
            </div>
        </div>
  )
}

export default CartItem