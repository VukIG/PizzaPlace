import MenuItem from './MenuItem';
import Button from './Button';
import { PiPlusBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import AddModal from './AddModal';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './store/menuSlice';

function Menu() {
  const data = useSelector(state => state.menu.data);
  const dispatch = useDispatch()
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Assuming that fetchData is dispatched somewhere to fetch data.
    dispatch(fetchData())
      .then(() => {
        setLoading(false); // Data fetching is complete
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Data fetching failed
      });
  }, []);
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
      {loading ? <p>Loading...</p> : data.map((element) => {
        return <MenuItem key={element.id} data={element} />;
      })}
    </div>
  );
}

export default Menu;
