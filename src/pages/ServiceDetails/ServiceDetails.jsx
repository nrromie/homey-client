import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

const ServiceDetails = () => {
    const [loading, setLoading] = useState(true);
    const [serviceData, setServiceData] = useState({ service: {}, provider: {} });
    const { _id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://homey-server.vercel.app/services/${_id}`);
            setServiceData(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    
        // Cleanup function to cancel the request in case the component is unmounted
        return () => {
          // Your cleanup logic, if any
        };
      }, [_id]);

    if (loading) {
        return <Loading />;
    }

    const { service, provider } = serviceData;
    const { email, photo, serviceName, serviceArea, price, description } = service;
    const { displayName, photoURL } = provider;

    return (
        <div className="container mx-auto p-8">
          <Helmet><title>{serviceName}</title></Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={photo} alt={serviceName} className="w-full h-auto rounded-lg mb-4" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{serviceName}</h2>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <div className="flex items-center mb-4">
                        <img src={photoURL} alt={displayName} className="w-10 h-10 rounded-full mr-4" />
                        <h3 className="text-gray-800 text-lg font-semibold">{displayName}</h3>
                    </div>
                    <p className="text-gray-800 font-semibold mb-4">Service Provider: {email}</p>
                    <p className="text-gray-800 font-semibold mb-4">Service Area: {serviceArea}</p>
                    <p className="text-violet-600 font-semibold text-2xl mb-4">{price}</p>
                    <Link to={`/booking/${_id}`} className="bg-violet-600 text-white px-8 py-3 rounded hover:bg-violet-700 transition duration-300">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;