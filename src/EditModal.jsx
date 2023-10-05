import Input from './Input';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { editItem } from './store/menuSlice';
import Button from './Button';
import Select from 'react-select';
import { useState, useRef } from 'react';
import { toppingsLookup } from './mockData';

function EditModal({ onClose, data }) {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const { name, description, id, price, toppings,imageUrl } = data;
  const [product, setProduct] = useState({
    name: name,
    description: description,
    price: price,
    toppings: toppings,
    image: '',
    id: id,
  });
  const [selectedToppings, setSelectedToppings] = useState(toppings.map((topping) => toppingsLookup[topping.id]));
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

  function handleChangedProduct(event) {
    event.preventDefault();
    const selectedToppingObjects = selectedToppings.map((toppingId) => toppingsLookup[toppingId]);
    let catchUndefined = selectedToppingObjects.some((item) => item === undefined);
    console.log(product.image)
    if (!product.image) 
      dispatch(editItem({ ...product, image: imageUrl, toppings: selectedToppings }));
    if (catchUndefined) 
      dispatch(editItem({ ...product, toppings: selectedToppings }));
    else
      dispatch(editItem({ ...product, toppings: selectedToppingObjects }));
    onClose();
    setProduct({ ...product, id: id });
  }
  return (
    <div className="p-4 w-[50vw] top-[-2em] shadow bg-slate-100 rounded-xl relative">
      <div className="flex mx-10 mt-10 justify-between">
        <h1 className="text-3xl font-semibold">Edit Product</h1>
        <Button onClick={onClose} className="rounded-full py-4">
          <AiOutlineClose className="text-xl font-bold" />
        </Button>
      </div>
      <form className="flex flex-col align-middle justify-center mx-10 mb-10" onSubmit={handleChangedProduct}>
        <Input heading={'Name:'} type={'text'} name={'name'} value={product.name} onChange={handleInputChange} />
        <Input
          heading={'Description:'}
          type={'text'}
          name={'description'}
          value={product.description}
          onChange={handleInputChange}
        />
        <Input heading={'Price:'} type={'number'} name={'price'} value={product.price} onChange={handleInputChange} />
        <label htmlFor="toppings" className="text-xl ">
          Toppings:
        </label>
        <Select
          className=" py-4 mb-4 text-xl w-full"
          defaultValue={selectedToppings}
          name="toppings"
          onChange={handleToppingsChange}
          options={Object.values(toppingsLookup)}
          isMulti
          key={data.id}
        />
        <Button
          className="h-11 my-3 w-[220px] text-center flex justify-center items-center align-middle"
          onClick={() => {
            imageRef.current.click();
          }}
        >
          <BsFillImageFill className="text-xl mr-2" />
          <span className="text-xl">Upload an image</span>
        </Button>
        <input id="file" className="hidden" accept="image/*" type="file" ref={imageRef} onChange={transformFile} />

        <div className="mt-4 flex relative bottom-[-25px] justify-between ">
          <Button onClick={handleChangedProduct} className="w-1/6 flex justify-center" type="submit">
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

export default EditModal;
