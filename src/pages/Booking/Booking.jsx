import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Booking = () => {
    const [loading, setLoading] = useState(true);
    const [serviceData, setServiceData] = useState({ service: {}, provider: {} });
    const { _id } = useParams();
    const { userData } = useContext(AuthContext);
    console.log(userData)

    useEffect(() => {
        fetch(`https://homey-server.vercel.app/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [_id]);


    const { service, provider } = serviceData;
    const { email, photo, serviceName, serviceArea, price, description } = service;
    const { displayName, photoURL } = provider;

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;

        const serviceId = _id;
        const providerEmail = email;
        const userEmail = userData?.email;
        const status = 'pending';
        const date = form.serviceDate.value;
        const specialInstructions = form.specialInstructions.value;
        const newBooking = { serviceId, providerEmail, userEmail, status, date, specialInstructions, price };
        console.log(newBooking)

        //send data
        fetch('https://homey-server.vercel.app/addbookings', {
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
                    form.reset();
                }
            })
    }

    if (loading) {
        return <Loading />;
    }


    return (
        <div className="flex items-center justify-center z-50 min-h-screen bg-gray-100">
            <Helmet><title>Booking {serviceName}</title></Helmet>
            <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Booking Details</h2>
                <form onSubmit={handleBooking}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Service Name</label>
                        <p className="py-2 border-b">{serviceName}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Service Image</label>
                        <img src={photo} alt="Service" className="w-full h-40 object-cover rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Service Provider</label>
                        <p className="py-2 border-b">{displayName}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Service Provider Email</label>
                        <p className="py-2 border-b">{email}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">User Email</label>
                        <p className="py-2 border-b">{userData?.email}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Service Taking Date</label>
                        <input
                            type="date"
                            name="serviceDate"
                            className="w-full py-2 px-3 rounded border focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Special Instruction</label>
                        <textarea
                            name="specialInstructions"
                            rows="4"
                            placeholder="Enter special instructions..."
                            className="w-full py-2 px-3 rounded border focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Price</label>
                        <p className="py-2 border-b">{price}</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Purchase this Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;