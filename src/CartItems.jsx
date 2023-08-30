import Button from './Button';
import CartItem from './CartItem'
import { useState } from 'react';
function CartItems() {
    
  return (
    <div className='w-full h-[80vh]'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <div className="flex justify-between items-center mt-5">
            <div className="flex gap-3">
                <Button>
                    Finish ordering
                </Button>
                <Button className='bg-white border border-orange-400 text-orange-400'>
                    Clear cart
                </Button>
            </div>
            <div className="flex font-bold text-3xl gap-2">
                <h1>TOTAL:</h1>
                <h1>$120.00</h1>
            </div>
        </div>
    </div>
  )
}

export default CartItems