import Button from "./Button";
import PropTypes from 'prop-types';
function MenuItem({ name, icon, title, desc, img }) {
  return (
    <div>
      <div className=" rounded-lg flex align-middle items-center bg-white justify-between mb-5">
        <div className="flex items-center gap-5">
          <img
            className="w-[100px] h-[100px] my-5 ml-5 rounded-lg"
            src={img}
            alt=""
          />
          <div className="flex flex-col justify-start items-start ">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="py-3 text-sm italic">
              {desc}
            </p>
            <h1 className="font-bold text-orange-400">$150</h1>
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
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MenuItem;