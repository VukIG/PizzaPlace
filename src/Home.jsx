import Button from "./Button";

function Home() {
  return (
    <>
      <div className="flex p-[25px] justify-center items-center gap-[25px]">
        <div className="flex flex-col justify-start items-start gap-[15px] lead-[48px]">
          <h1 className="w-[718.50px] text-stone-900 text-5xl font-bold leading-[48px]">
            Freshly Baked Pizzas, Made with Love
          </h1>
          <p className="w-[718.50px] text-stone-900 text-base font-normal leading-normal">
            Discover a gastronomic delight of Exquisite Pizzas, crafted with the
            finest ingredients and careful attention to detail
          </p>
          <div className=" px-[15px] py-2.5 bg-orange-400 rounded-[5px] justify-center items-center gap-[5px] inline-flex">
            <Button name="Start Ordering" />
          </div>
        </div>
        <div className="m-[25px] gap-[10px]">
          <img
            className="w-[718.50px] h-[868px]  "
            src="../public/pizzaBanner.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
