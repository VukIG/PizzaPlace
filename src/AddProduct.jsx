import { length } from './mockData';
import { toppingsLookup } from './mockData';
import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { addItem, asyncAdd } from './store/menuSlice';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import Input from './Input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function AddProduct({ onClose }) {
  const animatedComponents = makeAnimated();

  const dispatch = useDispatch();
  const id = length() + 1;
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [image, setImage] = useState({
    name: '',
    data: '',
  });
  const imageRef = useRef(null);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    toppings: [],
    image: '',
    id: id,
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
      setImage({
        name: file.name,
        data: reader.result,
      });
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
    dispatch(addItem({ ...product, toppings: selectedToppingObjects }));
    dispatch(asyncAdd({ ...product, toppings: selectedToppingObjects }));
    onClose();
    setProduct({ ...product, id: id + 1 });
  }

  return (
    <div className="p-4 w-[50vw] top-[-2em] shadow bg-slate-100 rounded-xl relative">
      <div className="flex mx-10 mt-10 justify-between">
        <h1 className="text-3xl font-semibold">Add Product</h1>
        <Button onClick={onClose} className="rounded-full py-4">
          <AiOutlineClose className="text-xl font-bold" />
        </Button>
      </div>
      <form className="flex flex-col align-middle justify-center mx-10 mb-10" onSubmit={handleNewProduct}>
        <Input
          heading={'Name:'}
          placeholder={'Enter Product name...'}
          type={'text'}
          name={'name'}
          value={product.name}
          onChange={handleInputChange}
        />
        <Input
          heading={'Description:'}
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
        <label htmlFor="toppings" className="text-xl ">
          Toppings:
        </label>
        <Select
          className="h-12 py-4 mb-4 text-xl w-full"
          placeholder="Select toppings.."
          value={selectedToppings.map((toppingId) => toppingsLookup[toppingId])}
          name="toppings"
          components={animatedComponents}
          onChange={handleToppingsChange}
          options={Object.values(toppingsLookup)}
          isMulti
        />
        <h1 className="text-xl my-4 ">Image:</h1>
        <div className="flex flex-col justify-start">
          <div className="flex justify-start w-[100px] text-black items-center gap-3">
            {product.image && <img src={product.image} alt="Image Preview" className="" />}
            {product.image && <span className="text-xl">{image.name}</span>}
          </div>
          <div className="flex items-center gap-3">
            <input type="file" accept="image/*" style={{ display: 'none' }} ref={imageRef} onChange={transformFile} />
            <Button
              className="h-11 my-3 w-[220px] text-center flex justify-center items-center align-middle"
              onClick={() => {
                imageRef.current.click();
              }}
            >
              <BsFillImageFill className="text-xl mr-2" />
              <span className="text-xl">Upload an image</span>
            </Button>
            {product.image && (
              <Button
                className="text-xl py-2 flex gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  setImage({
                    name: '',
                    data: '',
                  });
                  setProduct({ ...product, image: '' });
                  imageRef.current.value = '';
                }}
              >
                <FaTrash className="text-xl" />
                <span>Remove an image</span>
              </Button>
            )}
          </div>
        </div>

        <input id="file" className="hidden" accept="image/*" type="file" ref={imageRef} onChange={transformFile} />

        <div className="mt-4 flex relative bottom-[-25px] justify-between ">
          <Button onClick={handleNewProduct} className="w-1/6 flex justify-center" type="submit">
            Save
          </Button>
          <Button
            className="w-1/6 flex justify-center bg-white border hover:text-white border-orange-400 text-orange-400 "
            type="submit"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
