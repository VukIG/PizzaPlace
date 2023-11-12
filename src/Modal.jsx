import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { addItem, editItem, menuData, menuToppings } from './store/menuSlice';
import { useChangeItemMutation, useAddItemMutation } from './services/products.services';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import Input from './Input';
import Select from 'react-select';

function Modal({ onClose, data }) {
  const edit = data ? true : false;

  const [isSent, setIsSent] = useState(false);

  const { mutate: addItemMutation } = useAddItemMutation(); // RTK Query mutation hook for adding items
  const { mutate: editItemMutation } = useChangeItemMutation(); // RTK Query mutation hook for adding items

  const [selectedToppings, setSelectedToppings] = useState(edit ? data.toppings : []);
  const products = useSelector(menuData);

  const optionsOfToppings = useSelector(menuToppings);

  const selectOptions = optionsOfToppings.map((topping) => ({
    value: topping.id,
    label: topping.name,
  }));

  const defaultValues = selectedToppings.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const dispatch = useDispatch();

  console.log(selectedToppings);

  let id = products.length + 1;

  const [image, setImage] = useState({
    name: '',
    data: '',
  });
  const imageRef = useRef(null);
  const [product, setProduct] = useState(
    edit
      ? {
          name: data.name,
          description: data.description,
          price: data.price,
          toppings: data.toppings,
          imageUrl: data.imageUrl,
          id: data.id,
        }
      : {
          name: '',
          description: '',
          price: '',
          toppings: [],
          image: '',
          id: id,
        }
  );

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function transformFile(event) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function () {
        const imageData = reader.result;
        let finalImageData = base64ToUrl(imageData);
        resolve(finalImageData);
      };

      reader.onerror = function (error) {
        reject(error); // Reject the promise if there's an error
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        reject(new Error('No file selected')); // Handle the case where no file is selected
      }
    });
  }

  function base64ToUrl(base64Image) {
    const byteCharacters = atob(base64Image.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }

  function handleToppingsChange(selectedOptions) {
    const selectedToppings = selectedOptions.map((option) => ({
      id: option.value,
      name: option.label,
    }));
    setSelectedToppings(selectedToppings);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let imageUrl = image.data;
    if (edit) {
      addItemMutation({ ...product, image: imageUrl, toppings: selectedToppings })
        .then((response) => {
          if (response.success) {
            setIsSent(true);
            dispatch(editItem({ ...product, image: imageUrl, toppings: selectedToppings }));
          }
        })
        .finally(() => {
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        });
    } else {
      editItemMutation({ ...product, image: imageUrl, toppings: selectedToppings })
        .then((response) => {
          if (response.success) {
            setIsSent(true);
            dispatch(addItem({ ...product, image: imageUrl, toppings: selectedToppings }));
          }
        })
        .finally(() => {
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        });
    }
    onClose();
  }

  return (
    <div className="p-4 w-[50vw] top-[-2em] shadow bg-slate-100 rounded-xl relative">
      <div className="flex mx-10 mt-10 justify-between">
        <h1 className="text-3xl font-semibold">{data ? 'Edit Product' : 'Add Product'}</h1>
        <Button onClick={onClose} className="rounded-full py-4">
          <AiOutlineClose className="text-xl font-bold" />
        </Button>
      </div>
      <form className="flex flex-col align-middle justify-center mx-10 mb-10" onSubmit={handleSubmit}>
        <Input
          heading={'Name:'}
          placeholder={'Enter Product name...'}
          type={'text'}
          name={'name'}
          value={product.name}
          onChange={handleInputChange}
          required
        />
        <Input
          heading={'Description:'}
          placeholder={'Enter product description...'}
          type={'text'}
          name={'description'}
          value={product.description}
          onChange={handleInputChange}
          required
        />
        <Input
          heading={'Price:'}
          placeholder={'Enter product price...'}
          type={'number'}
          name={'price'}
          value={product.price}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="toppings" className="text-xl ">
          Toppings:
        </label>
        <Select
          className=" py-4 mb-4 text-xl w-full"
          defaultValue={defaultValues}
          name="toppings"
          onChange={handleToppingsChange}
          options={selectOptions}
          isMulti
          key={id}
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
              onClick={(e) => {
                e.preventDefault();
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

        <input
          id="file"
          className="hidden"
          accept="image/*"
          type="file"
          ref={imageRef}
          onChange={(event) => {
            transformFile(event)
              .then((imageData) => {
                setImage({
                  name: event.target.files[0].name,
                  data: imageData,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        />

        <div className="mt-4 flex relative bottom-[-25px] justify-between ">
          <Button onClick={handleSubmit} className="w-1/6 flex justify-center" type="submit">
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
        <div className="">{isSent && <h1 className="text-green text-xl p-2">Data sent successfully!</h1>}</div>
      </form>
    </div>
  );
}

export default Modal;
