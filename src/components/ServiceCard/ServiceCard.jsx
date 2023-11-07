import { Link } from 'react-router-dom';
import { FaMapLocationDot } from 'react-icons/fa6'

const ServiceCard = ({ service }) => {
    const { _id, email, photo, serviceName, serviceArea, price, description } = service;

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <Link to={`/services/${_id}`}>
                <img src={photo} alt={serviceName} className="w-full h-40 object-cover object-center" />
            </Link>

            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{serviceName}</h2>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-400"><FaMapLocationDot />{serviceArea}</span>
                    <span className="text-purple-600 dark:text-purple-300 font-bold">${price}</span>
                </div>

                <div className="mt-4 flex items-center">
                    <img src={photo} alt={serviceName} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-400">{email}</span>
                </div>

                <div className="mt-4">
                    <Link to={`/services/details/${_id}`} className="text-blue-500 dark:text-blue-300 hover:underline">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;