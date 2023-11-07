import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { _id, email, photo, serviceName, servicearea, price, description } = service;
    return (
        <div className="h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 flex-1">
                    <h2 className="text-3xl font-semibold tracki">{serviceName}</h2>
                    <p className="dark:text-gray-100 flex-1">{description}</p>
                </div>
                <Link to={`details/${_id}`} className="flex items-center justify-center w-full p-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</Link>
            </div>
        </div>
    );
};

export default ServicesCard;