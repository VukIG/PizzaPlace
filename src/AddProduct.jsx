import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function AddProduct({ onClose }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    toppings: [],
    count : 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function handleNewProduct(event) {
    event.preventDefault();
    console.log(product);
  }

  return (
    <div className="w-screen h-screen absolute shadow flex flex-col align-middle items-center justify-center top-[-70px]">
      <div className="w-1/2 h-[85vh] shadow bg-slate-100 rounded-xl">
        <Button onClick={onClose} className="relative left-[93%] top-4 rounded-full py-4">
          <AiOutlineClose />
        </Button>
        <form className="flex flex-col align-middle justify-center m-10" onSubmit={handleNewProduct}>
          <h1 className="text-4xl bold">Product name:</h1>
          <input
            className="h-12 py-7 px-3 my-4 text-xl"
            placeholder="Enter product name..."
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
          <h1 className="text-4xl mt-3 bold">Product description:</h1>
          <input
            className="h-12 py-7 px-3 my-4 text-xl"
            placeholder="Enter product description..."
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
          <h1 className="text-4xl mt-3 bold">Price:</h1>
          <input
            className="h-12 py-7 px-3 my-4 text-xl"
            placeholder="Enter product price"
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
          <h1 className="text-4xl mt-3 bold">Toppings:</h1>
          <input
            className="h-12 py-7 px-3 my-4 text-xl"
            placeholder="Enter a list of toppings"
            type="text"
            name="toppings"
            value={product.toppings}
            onChange={handleInputChange}
          />
          <h1 className="text-4xl my-3 bold">Image</h1>
          <label
            htmlFor="file"
            className="px-3 py-4 my-3 w-1/6 text-center cursor-pointer rounded bg-orange-400 hover:bg-orange-500 duration-75 text-white"
          >
            Upload a file
          </label>
          <input id="file" className="hidden" accept="image/*" type="file" />
          <Button className="w-3/12 flex justify-center relative left-3/4" type="submit">
            Add a new Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
