import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {
                services.map(service => {
                    return <ServicesCard key={service._id} service={service}></ServicesCard>
                })
            }
        </div>
    );
};

export default Services;