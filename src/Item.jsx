import Button from "./Button";
function Item() {
  return (
    <div>
      <div className="flex align-middle items-center">
        <img src="" alt="" />
        <div className="flex flex-col justify-start align-middle items-center">
          <h1>Vegan veggie</h1>
          <p>Daiya vegan pizza, paired with fresh veggies</p>
          <h1>$150</h1>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Item;
