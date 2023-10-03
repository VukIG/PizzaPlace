import MenuItem from './MenuItem';
import Button from './Button';
import data from './mockData';
import { PiPlusBold } from 'react-icons/pi';
import { useState } from 'react';
import AddModal from './AddModal';

function Menu() {
  const [active, setActive] = useState(false);
  function changeModal() {
    setActive((prev) => !prev);
  }
  return (
    <div className="w-full flex flex-col justify-start h-full bg-slate-100 p-5 mb-5 absolute">
      <AddModal onChange={changeModal} active={active} />
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl  font-bold">Discover menu</h1>
        <Button className="flex gap-3 align-middle justify-center items-center" onClick={changeModal}>
          <span>Add a product</span> <PiPlusBold />
        </Button>
      </div>
      {data.map((element) => {
        return <MenuItem key={element.id} data={element} />;
      })}
    </div>
  );
}

export default Menu;
