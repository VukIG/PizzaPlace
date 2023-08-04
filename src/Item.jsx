import Button from "./Button";
function Item() {
  return (
    <div>
      <div className=" rounded-lg flex align-middle items-center bg-white justify-between mb-[25px]">
        <div className="flex items-center gap-5">
          <img
            className="w-[100px] h-[100px] my-5 ml-5 rounded-lg"
            src="../public/pizzaBanner.jpeg"
            alt=""
          />
          <div className="flex flex-col justify-start items-start ">
            <h1 className="text-xl font-bold">Vegan veggie</h1>
            <p className="py-3 text-sm italic">
              Daiya vegan pizza, paired with fresh veggies
            </p>
            <h1 className="font-bold text-orange-400">$150</h1>
          </div>
        </div>

        <div className="mr-5">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Item;
