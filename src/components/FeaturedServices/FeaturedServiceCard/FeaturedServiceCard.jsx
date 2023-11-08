import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedServiceCard = ({ service }) => {
    const { _id, email, photo, serviceName, serviceArea, price, description } = service;

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden max-w-sm mx-auto my-4">
            <img className="w-full h-40 object-cover" src={photo} alt={serviceName} />

            <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{serviceName}</h3>
                <div className='flex-1'>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 overflow-hidden">{description}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{serviceArea}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
                </div>
                <div className="flex justify-between items-center pt-3">
                    <p className="text-lg font-bold text-[#2A98D9]">${price}</p>
                    <Link to={`/services/details/${_id}`} className="px-4 py-2 bg-[#2A98D9] text-white rounded-md hover:bg-blue-700 focus:outline-none">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServiceCard;