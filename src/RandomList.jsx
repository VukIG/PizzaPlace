import RandomItem from './RandomItem';
import { useSelector } from 'react-redux';
import { menuData } from './store/menuSlice';

function shuffleArray(data, id) {
  let newData = data.filter((item) => item.id != id);
  for (let i = newData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newData[i], newData[j]] = [newData[j], newData[i]];
  }
  return newData;
}

function RandomList(id) {
  const data = useSelector(menuData);
  function threeHeaders() {
    const randomList = shuffleArray(data, id);
    let randomItems = [];
    for (let i = 0; i < 3; i++) {
      randomItems.push(randomList[i]);
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
