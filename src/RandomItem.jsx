import { useState } from 'react';
import AmountButton from './AmountButton';
import { FiEdit } from 'react-icons/fi';
import AddModal from './AddModal';
function RandomItem({ data }) {
  const { name, description, id, price, imageUrl } = data;

  const [edit, setEdit] = useState(false);
  function changeModal() {
    setEdit((prev) => !prev);
  }

  return (
    <>
      <AddModal onChange={changeModal} edit={edit} data={data} />
      <div className="flex gap-5 bg-white flex-col p-5 w-full rounded">
        <img className="w-full object-cover rounded h-72" src={imageUrl} alt="" />
        <div className="py-3">
          <div className="flex gap-3 items-center align-middle font-bold pb-3">
            <h1 className="text-xl">{name}</h1>
            <FiEdit onClick={changeModal} className="text-slate-500 ease cursor-pointer hover:text-black duration-75" />
          </div>
          <p className="italic font-normal">{description}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="text-orange-400 text-xl font-bold">${price}</p>
          <div>
            <AmountButton id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomItem;
