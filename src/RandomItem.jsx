import AmountButton from './AmountButton';

function RandomItem({ data }) {
  const { name, description, price, imageUrl } = data; 
  function sendData(data) {
    console.log(data);
    const item={
      "title": name,
      "price": price,
      "count": data,
    }
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((item) => {
        console.log('Item added:', item);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <div className="flex gap-5 bg-white flex-col p-5 w-full rounded">
      <img className="w-full object-cover rounded h-72" src={imageUrl} alt="" />
      <div className="py-3">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="italic font-normal">{description}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="text-orange-400 text-xl font-bold">${price}</p>
        <div>
          <AmountButton dataProp={sendData} />
        </div>
      </div>
    </div>
  );
}

export default RandomItem;
