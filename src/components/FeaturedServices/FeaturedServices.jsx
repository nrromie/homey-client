import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../ServiceCard/ServiceCard';


const FeaturedServices = ({ featuredServices }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const fetchData = () => {
      fetch('https://homey-server.vercel.app/featuredservices')
        .then(res => res.json())
        .then(data => {
          setServices(data)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
        })
    }
    fetchData();
  }, [])

  if (loading) {
    return <Loading></Loading>
  }



  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <Link to="/services" className="mt-6 text-blue-500 hover:underline">
        See All Services
      </Link>
    </section>
  );
};

export default FeaturedServices;