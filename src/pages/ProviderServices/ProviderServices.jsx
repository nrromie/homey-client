import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeaturedServiceCard from "../../components/FeaturedServices/FeaturedServiceCard/FeaturedServiceCard";

const ProviderServices = () => {
    const [services, setServices] = useState([]);
    const { email } = useParams();

    const fetchData = () => {
        fetch(`https://homey-server.vercel.app/myservices/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => {
                fetchData()
                console.error(error)
            });
    };

    useEffect(() => {
        fetchData();
    }, [email]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto dark:text-white">
            {
                services.map(service => (
                    <FeaturedServiceCard key={service._id} service={service} />
                ))
            }
        </div>
    );
};

export default ProviderServices;