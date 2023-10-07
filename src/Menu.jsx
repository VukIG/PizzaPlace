import MenuItem from './MenuItem';
import Button from './Button';
import { PiPlusBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import AddModal from './AddModal';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetch } from './store/menuSlice';
function Menu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu.pizzas);
  console.log(data);
  useEffect(() => {
    dispatch(asyncFetch());
  }, [dispatch]);
  const [active, setActive] = useState(false);
  function changeModal() {
    setActive((prev) => !prev);
  }
  return (
    <div className="w-full flex flex-col justify-start  bg-stone-100 p-5 mb-5 absolute">
      <AddModal onChange={changeModal} active={active} />
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl  font-bold">Discover menu</h1>
        <Button className="flex gap-3 align-middle justify-center items-center" onClick={changeModal}>
          <span>Add a product</span> <PiPlusBold />
        </Button>
      </div>
      {
        data.map((element) => {
          return <MenuItem key={element.id} data={element} />;
        })
      }
    </div>
  );
}

export default Menu;
