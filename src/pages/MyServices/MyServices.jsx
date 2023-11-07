import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const MyServices = () => {
    const { userData } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const email = userData?.email;

    useEffect(() => {
        fetch(`https://homey-server.vercel.app/myservices/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error));
    }, [email]);

    if (services.length < 1) {
        return (
            <div className="text-center mt-8">
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
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        );
    }
};

export default MyServices;
