import { useState, useEffect } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { AiOutlineMinus } from 'react-icons/ai';
import { useCart } from './CartContext';
import Button from './Button';

function Amount({ amount, id, className = '' }) {
  const { addOrRemoveItem, removeItem, setCount } = useCart();
  useEffect(() => {
    addOrRemoveItem(id, amount);
  }, [amount]);
  function incCount(e) {
    e.preventDefault();
    let newAmount=amount+1;
    setCount(id,newAmount);
    addOrRemoveItem(id, amount);
  }

  function decCount(e) {
    e.preventDefault();
    if (amount > 1) {
      let newAmount=amount-1
      setCount(id,newAmount);
    } else {
      setCount(id,0);
      removeItem(id);
    }
    addOrRemoveItem(id,amount)
  }

  return (
    <div className={`flex justify-center align-middle gap-2 items-center ${className}`}>
      <Button className="rounded-full w-12 h-12" onClick={decCount}>
        <AiOutlineMinus />
      </Button>
      <span>{amount}</span>
      <Button className="rounded-full w-12 h-12" onClick={
        incCount
      }>
        <PiPlusBold />
      </Button>
    </div>
  );
}

export default Amount;
