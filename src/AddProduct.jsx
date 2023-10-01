import { length } from './mockData';
import { toppingsOptions } from './mockData';
import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { addItem } from './store/cartSlice';
import { useDispatch } from 'react-redux';
import Input from './Input';
import Select from 'react-select';

function AddProduct({ onClose }) {
  const dispatch = useDispatch();
  const id = length() + 1;
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    toppings: [],
    image: '',
    id: id,
  });

  const toppingsLookup = {};
  toppingsOptions.forEach((topping) => {
    toppingsLookup[topping.id] = { value: topping.id, label: topping.name };
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function transformFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  }

  function handleToppingsChange(selectedOptions) {
    const selectedToppingValues = selectedOptions.map((option) => option.value);
    setSelectedToppings(selectedToppingValues);
  }

  function handleNewProduct(event) {
    event.preventDefault();
    const selectedToppingObjects = selectedToppings.map((toppingId) => toppingsLookup[toppingId]);

    setProduct({ ...product, toppings: selectedToppingObjects });
    dispatch(addItem({ ...product, toppings: selectedToppingObjects }));
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="absolute w-full h-full bg-slate-700 opacity-40" />

      <div className="w-1/2 h-[85vh] shadow bg-slate-100 rounded-xl relative">
        <Button onClick={onClose} className="absolute top-4 right-4 rounded-full py-4">
          <AiOutlineClose />
        </Button>
        <form className="flex flex-col align-middle justify-center m-10" onSubmit={handleNewProduct}>
          <Input
            heading={'Product name:'}
            placeholder={'Enter Product name...'}
            type={'text'}
            name={'name'}
            value={product.name}
            onChange={handleInputChange}
          />
          <Input
            heading={'Product description:'}
            placeholder={'Enter product description...'}
            type={'text'}
            name={'description'}
            value={product.description}
            onChange={handleInputChange}
          />
          <Input
            heading={'Price:'}
            placeholder={'Enter product price...'}
            type={'number'}
            name={'price'}
            value={product.price}
            onChange={handleInputChange}
          />
          <h1 className="text-4xl bold">Toppings:</h1>
          <Select
            className="h-12 py-7 px-3 my-4 text-xl w-full"
            placeholder="Select toppings.."
            value={selectedToppings.map((toppingId) => toppingsLookup[toppingId])}
            name="toppings"
            onChange={handleToppingsChange}
            options={Object.values(toppingsLookup)}
            isMulti
          />
          <h1 className="text-4xl my-3 bold">Image</h1>
          <label
            htmlFor="file"
            className="px-3 py-4 my-3 w-1/6 text-center cursor-pointer rounded bg-orange-400 hover:bg-orange-500 duration-75 text-white"
          >
            Upload a file
          </label>
          <input id="file" className="hidden" accept="image/*" type="file" onChange={transformFile} />

          <Button className="w-3/12 flex justify-center relative left-3/4" type="submit">
            Add a new Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
