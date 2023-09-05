import RandomItem from "./RandomItem";
import data from "./mockData"

function shuffleArray(data) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
}
function RandomList() {
  const randomItems = [];

  function threeHeaders() {
    shuffleArray(data);
    for (let i = 0; i < 3; i++) {
      randomItems.push(data[i]);
    }
    return randomItems;
  }

  return (
    <div className="flex w-full justify-around gap-7 align-middle items-center">
      {threeHeaders().map((item) => (
        <RandomItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default RandomList;
