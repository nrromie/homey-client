import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const UpdateService = () => {
    const { userData } = useContext(AuthContext);
    const { _id } = useParams()

    const [serviceData, setServiceData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://homey-server.vercel.app/services/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setServiceData(data);
                    setLoading(false)
                } else {
                    console.error('Service not found');
                }
            })
            .catch((error) => console.error('Error fetching service:', error));
    }, [_id]);


    const handleUpdateService = (e) => {
        e.preventDefault();
        const form = e.target;

        // Extract updated service data from the form
        const updatedService = {
            photo: form.photo.value,
            serviceName: form.servicename.value,
            serviceArea: form.servicearea.value,
            price: parseFloat(form.price.value),
            description: form.description.value,
        };

        // Send updated data to the server
        fetch(`https://homey-server.vercel.app/updateservice/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedService),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.updatedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    console.error('Error updating service');
                }
            })
            .catch((error) => console.error('Network error or other exception:', error));
    };

    if (loading) {
        return <Loading />
    }

    const { service } = serviceData;
    const { email, photo, serviceName, serviceArea, price, description } = service;

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <Helmet><title>Update Service</title></Helmet>
            <form onSubmit={handleUpdateService} className="container flex-col mx-auto space-y-12 grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="col-span-full lg:col-span-1">
                    <p className="font-medium">Service Information</p>
                    <p className="text-xs">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full lg:col-span-2">
                    <div className="col-span-full sm:col-span-2">
                        <label className="text-sm">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label className="text-sm">Service Name</label>
                        <input
                            type="text"
                            name="servicename"
                            defaultValue={serviceName}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-1">
                        <label className="text-sm">Your Name</label>
                        <input
                            name="username"
                            type="text"
                            value={userData?.displayName}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            disabled
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-1">
                        <label className="text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userData?.email}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            disabled
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-1">
                        <label className="text-sm">Price</label>
                        <input
                            type="text"
                            name="price"
                            defaultValue={price}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-1">
                        <label className="text-sm">Service Area</label>
                        <input
                            type="text"
                            name="servicearea"
                            defaultValue={serviceArea}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="text-sm">Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            defaultValue={description}
                            className="w-full h-20 rounded-md resize-none focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            maxLength="100"
                            required
                        />
                    </div>
                    <button type="submit" className="col-span-full self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Update</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateService;