import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedServiceCard from './FeaturedServiceCard/FeaturedServiceCard';


const FeaturedServices = () => {
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
          fetchData()
          console.error(error)
        })
    }
    fetchData();
  }, [])

  if (loading) {
    return <Loading></Loading>
  }



  return (
    <section className="p-6 dark:bg-slate-900 dark:text-gray-50">
      <div className='w-11/12 mx-auto'>
        <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <FeaturedServiceCard key={service._id} service={service} />
          ))}
        </div>
        <Link to="/services" className="mt-6 text-blue-500 hover:underline">
          See All Services
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;