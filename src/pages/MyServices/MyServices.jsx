import { useContext, useEffect, useState } from "react";
import ServicesCard from "../Services/ServicesCard/ServicesCard";
import { AuthContex } from "../../providers/AuthProvider";

const MyServices = () => {
    const { userData } = useContext(AuthContex);
    const [services, setServices] = useState([]);
    const email = userData?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myservices/${email}`)
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

export default MyServices;