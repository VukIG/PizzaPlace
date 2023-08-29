import RandomItem from "./RandomItem";
import data from "./mockData";
function RandomList() {
  const randomItems = [];
  function shuffleArray(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
  }
  function returnRI(title, desc, img, price) {
    return <RandomItem title={title} desc={desc} img={img} price={price} />;
  }
  function threeHeaders() {
    shuffleArray(data);
    for (let i = 0; i < 3; i++) {
      const title = data[i].name;
      const desc = data[i].description;
      const img = data[i].imageUrl;
      const price = data[i].price;
      randomItems.push(returnRI(title, desc, img, price));
    }
    return randomItems;
  }
  return (
    <div className="flex w-full justify-around gap-7 align-middle items-center">
      {threeHeaders()}
    </div>
  );
}

export default RandomList;
