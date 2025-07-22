// Hero.jsx
import { FaMugHot, FaMedal, FaSeedling, FaFireAlt, FaCoffee  } from "react-icons/fa";
import Herobg from '../../public/coffee-hero.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative">
        <img
          src={Herobg}
          alt="Coffee Cup with Beans"
          className="md:w-full md:h-[650px] h-[389px] object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-end md:pr-48 pr-0 p-5">
          <div className="max-w-xl text-left text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-sm md:text-base raleway">
              It’s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
              Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] hover:bg-[#d3a55d] transition-all px-4 py-2 text-black rounded-sm text-sm font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#F4F3F0] py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="space-y-2">
          <FaMugHot className="text-4xl text-[#331A15] mx-auto" />
          <h3 className="text-xl rancho text-[#331A15]">Awesome Aroma</h3>
          <p className="text-sm raleway text-gray-700">
            You will definitely be a fan of the design & aroma of your coffee.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="space-y-2">
          <FaMedal className="text-4xl text-[#331A15] mx-auto" />
          <h3 className="text-xl rancho text-[#331A15]">High Quality</h3>
          <p className="text-sm raleway text-gray-700">
            We served the coffee to you maintaining the best quality.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="space-y-2">
          <FaSeedling className="text-4xl text-[#331A15] mx-auto" />
          <h3 className="text-xl rancho text-[#331A15]">Pure Grades</h3>
          <p className="text-sm raleway text-gray-700">
            The coffee is made of the green coffee beans which you will love.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="space-y-2">
          <FaFireAlt className="text-4xl text-[#331A15] mx-auto" />
          <h3 className="text-xl rancho text-[#331A15]">Proper Roasting</h3>
          <p className="text-sm raleway text-gray-700">
            Your coffee is brewed by first roasting the green coffee beans.
          </p>
        </div>
      </div>

      {/* sip & savor section Start */}
      <div>
        <h4 className="text-center raleway text-[20px] mt-28">--- Sip & Savor ---</h4>
        <h1 className="text-[#331A15] text-center text-[55px] rancho">Our Popular Products</h1>
        <Link to={'/add-coffee'} className="flex justify-center mt-6">
        <button className="w-[180px] h-[48px] border border-[#331A15] bg-[#E3B577] hover:bg-white hover:text-[#E3B577] rounded-[5px]  rancho text-xl text-white flex items-center justify-between px-4">Add Coffee <span><FaCoffee /></span> </button>
        </Link>
      </div>

      {/* sip & savor section End */}
      
    </div>
  );
};

export default Hero;
