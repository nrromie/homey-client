import HexagonalImage from "./HexagonalImg/HexagonalImg";
import 'aos/dist/aos.css';

const Banner = () => {
  return (
    <div className="relative min-h-screen mt-[-10vh] bg-cover bg-center bg-blue-900 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/DrhFJBS/homegardening.jpg"
          alt="Home Gardening Banner"
        />
      </div>
      <div className="absolute left-2 bottom-2 h-60 w-60 md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] flex items-center">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="mx-auto w-32 h-32 md:w-44 md:h-44 lg:w-72 lg:h-72"
          >
            <HexagonalImage imageUrl={"https://i.ibb.co/fqtz5Y0/housecook.jpg"} />
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 absolute left-0 top-0"
          >
            <HexagonalImage imageUrl={"https://i.ibb.co/XD1V6br/petcare.jpg"} />
          </div>
          <div
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 absolute left-0 bottom-0"
          >
            <HexagonalImage imageUrl={"https://i.ibb.co/k5B0q86/housecleaning.jpg"} />
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 absolute right-0 bottom-0"
          >
            <HexagonalImage imageUrl={"https://i.ibb.co/z2FX78v/babysitting.jpg"} />
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