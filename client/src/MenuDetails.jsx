import { useParams } from 'react-router-dom';
import RandomList from './RandomList';
import MenuDetailsMain from './MenuDetailsMain';
import { selectMenuItemById } from './store/menuSlice';
import { useSelector } from 'react-redux';
function MenuDetails() {
  const { id } = useParams();
  const menuItem = useSelector((state) => selectMenuItemById(state, id));
  return (
    <div className="w-full bg-stone-100 p-6">
      <MenuDetailsMain data={menuItem} />
      <div className="py-6 text-4xl font-bold ">You may also like</div>
      <div className="flex">
        <RandomList id={id} />
      </div>
    </div>
  );
}

export default MenuDetails;
