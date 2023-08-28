import RandomItem from "./RandomItem";

function RandomList() {
  const threeHeaders = Array.from({ length: 3 }, (_, index) => {
    return <RandomItem key={index} />;
  });
  return (
    <div className="flex w-full justify-around gap-7 align-middle items-center">
      {threeHeaders}
    </div>
  );
}

export default RandomList;
