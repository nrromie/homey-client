import HexagonalImage from "./HexagonalImg/HexagonalImg";
import 'aos/dist/aos.css';

const Banner = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center bg-blue-900 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"><img className="w-full h-full object-cover" src="https://i.ibb.co/DrhFJBS/homegardening.jpg" alt="" />
        <div className="w-1/2">
          <div data-aos="flip-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="absolute top-40 md:left-20 left-[70px] lg:left-44 w-72 h-72">
            <HexagonalImage imageUrl={"https://i.ibb.co/fqtz5Y0/housecook.jpg"} />
          </div>
          <div data-aos="fade-down-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="absolute top-10 lg:left-24 w-40 h-40">
            <HexagonalImage imageUrl={"https://i.ibb.co/XD1V6br/petcare.jpg"} />
          </div>
          <div data-aos="fade-up-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="absolute bottom-7 lg:left-24 w-40 h-40">
            <HexagonalImage imageUrl={"https://i.ibb.co/k5B0q86/housecleaning.jpg"} />
          </div>
          <div data-aos="fade-up-left" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="absolute bottom-7 right-0 md:left-72 lg:left-96 w-40 h-40">
            <HexagonalImage imageUrl={"https://i.ibb.co/z2FX78v/babysitting.jpg"} />
          </div>
        </div>
      </div>
      <div className="block lg:absolute lg:right-24 text-center z-10">
        <h1 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Homey Services
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Your trusted partner for home services.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;