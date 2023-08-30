import Amount from './Amount';
import Button from './Button';

function CartItem() {
  return (
    <div className="flex justify-between py-5 border-b border-black items-center">
            <div className="flex justify-around gap-3 items-baseline ">
                <h1 className='text-3xl'>5</h1><span>X</span><h1 className='text-3xl'>Veggan Veggie</h1>
            </div>
            <div className="flex justify-around gap-3 items-center">
                <h1 className='font-bold text-3xl'>$75.00</h1> <Amount className="h-12" /> <Button className='h-12'>Remove</Button>
            </div>
        </div>
  )
}

export default CartItem