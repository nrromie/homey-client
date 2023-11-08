import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { FaSearch } from 'react-icons/fa'
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import axios from "axios";
import { Helmet } from "react-helmet";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = searchQuery ? `https://homey-server.vercel.app/services?query=${searchQuery}` : 'https://homey-server.vercel.app/services';
            const response = await axios.get(apiUrl);
            setServices(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [searchQuery]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet><title>Services</title></Helmet>
            <div className="relative flex justify-center items-center w-11/12 mx-auto my-4">
                <div className="flex relative w-48 sm:w-auto">
                    <input
                        className="w-full py-2 pl-10 pr-4 text-sm rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className="text-gray-500" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {
                    services.map(service => {
                        return <ServiceCard key={service._id} service={service} />
                    })
                }
            </div>
        </div>
    );
};

export default Services;