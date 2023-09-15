import { PiPlusBold } from 'react-icons/pi';
import { AiOutlineMinus } from 'react-icons/ai';
import Button from './Button';

function Amount({ amount, onIncrement, onDecrement, className = '' }) {

  return (
    <div className={`flex justify-center align-middle gap-2 items-center ${className}`}>
      <Button className="rounded-full w-12 h-12" onClick={onDecrement}>
        <AiOutlineMinus />
      </Button>
      <span>{amount}</span>
      <Button className="rounded-full w-12 h-12" onClick={onIncrement}>
        <PiPlusBold />
      </Button>
    </div>
  );
}

export default Amount;
