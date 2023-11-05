import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [loading, setLoading] = useState(true);
    const [service, setService] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const { email, photo, serviceName, serviceArea, price, description } = service;

    const handleBookNow = () => {

        newBooking = 

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Inserted Seccessfully')
                }
            })
    }

    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={photo} alt={serviceName} className="w-full h-auto rounded-lg mb-4" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">{serviceName}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-gray-800 font-semibold mb-4">Service Provider: {email}</p>
                    <p className="text-gray-800 font-semibold mb-4">Service Area: {serviceArea}</p>
                    <p className="text-violet-600 font-semibold text-xl mb-4">{price}</p>
                    <button className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;