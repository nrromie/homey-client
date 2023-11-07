import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
          <div data-aos="fade-up" key={service._id}>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{service.serviceName}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/services" className="mt-6 text-blue-500 hover:underline">
        See All Services
      </Link>
    </section>
  );
};

export default FeaturedServices;