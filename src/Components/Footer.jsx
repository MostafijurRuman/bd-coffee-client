// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-cover text-gray-700 font-raleway px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-4">
          <img src="/logo1.png" alt="Espresso Emporium" className="h-14" />
          <h2 className="text-2xl rancho text-[#331A15]">Espresso Emporium</h2>
          <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

          <div className="flex items-center space-x-4 mt-4 text-xl text-white">
            <div className="bg-[#331A15] p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaInstagram /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaLinkedinIn /></div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl rancho text-[#331A15] mb-2">Get in Touch</h3>
            <p className="flex items-center gap-2"><FiPhone /> +88 01533 333 333</p>
            <p className="flex items-center gap-2"><FiMail /> info@gmail.com</p>
            <p className="flex items-center gap-2"><FiMapPin /> 72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-xl rancho text-[#331A15] mb-4">Connect with Us</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Name" className="w-full border border-gray-300 px-3 py-2 rounded" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 px-3 py-2 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full border border-gray-300 px-3 py-2 rounded"></textarea>
            <button type="submit" className="px-5 py-2 border-2 border-[#331A15] text-[#331A15] font-semibold rounded-full hover:bg-[#331A15] hover:text-white transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
