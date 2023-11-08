import { Link } from 'react-router-dom';
import { FaMapLocationDot } from 'react-icons/fa6'

const ServiceCard = ({ service }) => {
    const { _id, email, photo, serviceName, photoURL, displayName, serviceArea, price, description } = service;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-md overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
            <img src={photo} alt={serviceName} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{serviceName}</h2>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
                <div className="flex items-center mt-3">
                    <img src={photoURL} alt={displayName} className="w-8 h-8 rounded-full object-cover mr-2" />
                    <p className="text-gray-700 dark:text-gray-300">{displayName}</p>
                </div>
                <div className="mt-3 flex justify-between">
                    <p className="text-gray-600 dark:text-gray-400">{serviceArea}</p>
                    <p className="text-green-500 font-semibold">${price}</p>
                </div>
                <div className="mt-4">
                    <Link to={`/services/details/${_id}`} className="px-4 py-2 bg-[#2A98D9] text-white rounded-md hover:bg-blue-700 focus:outline-none">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;