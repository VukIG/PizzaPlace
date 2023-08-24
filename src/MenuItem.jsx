import Button from "./Button";
import data  from "./mockData"; 

// eslint-disable-next-line react/prop-types
function MenuItem({ name, icon }) {    
  return (
    <div>
      {data.foreach((menuGroup) => (
        menuGroup.foreach((item) => (
          <div
            key={item.id}
            className="rounded-lg flex align-middle items-center bg-white justify-between mb-5"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-[100px] h-[100px] my-5 ml-5 rounded-lg"
                src={item.imageUrl}
                alt={item.name}
              />
              <div className="flex flex-col justify-start items-start ">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p className="py-3 text-sm italic">{item.description}</p>
                <h1 className="font-bold text-orange-400">${item.price}</h1>
              </div>
            </div>

            <div className="mr-5">
              <Button>
                <div className="flex gap-3 align-middle justify-center items-center">
                  {name}
                  {icon}
                </div>
              </Button>
            </div>
          </div>
        ))
      ))}
    </div>
  );
}

export default MenuItem;
