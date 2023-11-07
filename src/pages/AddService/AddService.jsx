import { useContext } from "react";
import { AuthContex } from "../../providers/AuthProvider";

const AddService = () => {

    const { userData } = useContext(AuthContex);

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;

        const photo = form.photo.value;
        const serviceName = form.servicename.value;
        const email = form.email.value;
        const serviceArea = form.servicearea.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;

        const newService = { email, photo, serviceName, serviceArea, price, description };

        //send data
        fetch('https://homey-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Inserted Seccessfully')
                    form.reset();
                }
            })
    }

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddService} className="container flex-col mx-auto space-y-12 grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
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
                            placeholder="Enter Photo URL"
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label className="text-sm">Service Name</label>
                        <input
                            type="text"
                            name="servicename"
                            placeholder="Enter Service Name"
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
                            placeholder="Enter Price"
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-1">
                        <label className="text-sm">Service Area</label>
                        <input
                            type="text"
                            name="servicearea"
                            placeholder="Enter Service Area"
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            required
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="text-sm">Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="Enter Description (max 100 characters)"
                            className="w-full h-20 rounded-md resize-none focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                            maxLength="100"
                            required
                        />
                    </div>
                    <button className="col-span-full self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" type="submit">Add</button>
                </div>
            </form>
        </section>
    );
};

export default AddService;