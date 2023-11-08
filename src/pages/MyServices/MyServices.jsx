import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Card from "./card/card";
import Swal from 'sweetalert2'

const MyServices = () => {
    const { userData } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const email = userData?.email;

    const fetchData = () => {
        fetch(`https://homey-server.vercel.app/myservices/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchData();
    }, [email]);

    const handleDelete = async (_id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                const response = await fetch(`https://homey-server.vercel.app/deleteservice/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    fetchData()
                    console.log('Service deleted successfully');
                } else {
                    console.error('Error deleting service');
                }
            }
        } catch (error) {
            console.error('Network error or other exception:', error);
        }
    };


    if (services.length < 1) {
        return (
            <div className="text-center mt-8">
                <Helmet><title>My Services</title></Helmet>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    You have not added any service yet.
                </p>
                <Link
                    to={'/addservice'}
                    className="text-blue-500 dark:text-blue-300 font-semibold hover:underline mt-2"
                >
                    Add Now
                </Link>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {services.map(service => (
                    <Card key={service._id} service={service} handleDelete={handleDelete} />
                ))}
            </div>
        );
    }
};

export default MyServices;
