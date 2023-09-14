import { useState, useEffect } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { AiOutlineMinus } from 'react-icons/ai';
import { useCart } from './CartContext';
import Button from './Button';

function Amount({ amount, onChange, onRemove, id, className = '' }) {
  const [count, setCount] = useState(amount);
  const { addOrRemoveItem } = useCart();
  useEffect(() => {
    addOrRemoveItem(id, count);
  }, [count]);
  function incCount(e) {
    e.preventDefault();
    setCount(count + 1);
    onChange((count) => count + 1);
    addOrRemoveItem(id, count);
  }

  function decCount(e) {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
      onChange((count) => count - 1);
    } else {
      onRemove();
    }
  }

  return (
    <div className={`flex justify-center align-middle gap-2 items-center ${className}`}>
      <Button className="rounded-full w-12 h-12" onClick={decCount}>
        <AiOutlineMinus />
      </Button>
      <span>{count}</span>
      <Button className="rounded-full w-12 h-12" onClick={incCount}>
        <PiPlusBold />
      </Button>
    </div>
  );
}

export default Amount;
