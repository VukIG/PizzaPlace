import { AiFillPlusCircle } from 'react-icons/ai';
import { BiSolidMinusCircle } from 'react-icons/bi';
import Button from './Button'
import { useState } from 'react';
function Amount({amount}) {
    const [count,setCount]=useState(amount);
    function incCount() {
        setCount(count+1);
    }
    function decCount() {
        setCount(count-1);
    }
    return (
        <div className='flex justify-center align-middle gap-2 items-center'>
            <Button onClick={incCount}>
                <AiFillPlusCircle />    
            </Button>
            <span>{count}</span>
            <Button onClick={decCount}>
                <BiSolidMinusCircle />    
            </Button>
        </div>
    )
}

export default Amount