import { IoCheckmarkCircle } from "react-icons/io5";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 items-center flex flex-col">
      {/* Price and Name Section */}
      <div>
        <h2 className="text-center">
          <span className="text-7xl font-bold">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-4xl text-center my-6">{name}</h4>
      </div>

      {/* Features Section */}
      <div className="flex-grow">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center my-2 ">
              <IoCheckmarkCircle className="mr-2 text-green-400 text-xl" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-green-700 p-3 rounded-lg w-full hover:bg-green-900 font-bold">Buy Now</button>
    </div>
    
  );
};

export default PriceOption;
