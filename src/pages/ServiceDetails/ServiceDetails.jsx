import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import { Helmet } from "react-helmet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ServiceDetails = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState({ service: {}, provider: {} });
  const { _id } = useParams();
  const [location, setLocation] = useState({
    //Dhaka
    lat: 23.8041,
    lng: 90.4152,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://homey-server.vercel.app/services/${_id}`);
        setServiceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) {
    return <Loading />;
  }

  const { service, provider } = serviceData;
  const { email, photo, serviceName, serviceArea, price, description } = service;
  const { displayName, photoURL } = provider;

  return (
    <div className="container mx-auto p-8 dark:text-white">
      <Helmet><title>{serviceName}</title></Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={photo} alt={serviceName} className="w-full h-auto rounded-lg mb-4" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{serviceName}</h2>
          <p className="mb-6">{description}</p>
          <div className="flex items-center mb-8">
            <img src={photoURL} alt={displayName} className="w-12 h-12 object-cover rounded-full mr-4" />
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300">{displayName}</p>
              <p className="text-gray-500 dark:text-gray-400">{email}</p>
            </div>
          </div>
          <p className="text-gray-800 dark:text-white font-semibold mb-4">Service Area: {serviceArea}</p>
          <p className="text-violet-600 font-semibold text-2xl mb-4">${price}</p>
          <div className="flex space-x-4">
            <Link
              to={`/providerservices/${email}`}
              className="bg-[#2A98D9] text-white py-2 px-4 rounded-md hover:bg-[#0071AF] transition duration-300"
            >
              Other Services by {displayName}
            </Link>
            <Link
              to={`/booking/${_id}`}
              className="bg-[#0071AF] text-white py-2 px-4 rounded-md hover:bg-[#005C8D] transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ height: '200px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.lat, location.lng]}>
            <Popup>{serviceName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ServiceDetails;