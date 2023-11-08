import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MySchedules = () => {
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [AllBookings, setAllBookings] = useState({ bookings: [], myWork: [] });

    const handleStatusChange = (e, _id) => {
        const newStatus = e.target.value;
        console.log(newStatus, _id)
        fetch(`https://homey-server.vercel.app/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newStatus }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                fetchData()
            })
            .catch((error) => {
                console.error('Error updating status:', error);
            });
    };

    const fetchData = () => {
        fetch(`https://homey-server.vercel.app/myschedules/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData()
    }, [user?.email]);

    if (loading) {
        return <Loading />;
    }

    const { bookings, myWork } = AllBookings;

    return (
        <div className="dark:bg-slate-900">
            <Helmet><title>My Schedule</title></Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi">My Bookings</h2>
                {bookings.length < 1 ? (
                    <div>No booking yet. <Link to={'/services'} className="text-blue-500 dark:text-blue-300 font-semibold hover:underline mt-2">Book Now</Link></div>
                ) : (<>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Service Provider</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Address</th>
                                    <th className="p-3 text-right">Price</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => {
                                    const { _id,
                                        serviceName,
                                        providerName,
                                        serviceArea,
                                        status,
                                        date,
                                        price,
                                    } = booking;

                                    return (
                                        <tr
                                            key={_id}
                                            className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                                        >
                                            <td className="p-3">{serviceName}</td>
                                            <td className="p-3">{providerName}</td>
                                            <td className="p-3">{date}</td>
                                            <td className="p-3">{serviceArea}</td>
                                            <td className="p-3 text-right">${price}</td>
                                            <td className="p-3 text-right">
                                                <span
                                                    className={`px-3 py-1 font-semibold rounded-md ${status === 'pending'
                                                        ? 'dark:bg-violet-400 dark:text-gray-900'
                                                        : status === 'inprogress'
                                                            ? 'dark:bg-yellow-400 dark:text-gray-900'
                                                            : 'dark:bg-green-400 dark:text-gray-900'
                                                        }`}
                                                >
                                                    {status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
                )}
            </div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi">My Works</h2>
                {myWork.length < 1 ? (
                    <div>No works yet</div>
                ) : (<>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Client</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Address</th>
                                    <th className="p-3 text-right">Price</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myWork.map((work) => {
                                    const { _id,
                                        serviceName,
                                        providerName,
                                        userName,
                                        serviceArea,
                                        status,
                                        date,
                                        price,
                                    } = work;

                                    return (
                                        <tr
                                            key={_id}
                                            className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                                        >
                                            <td className="p-3">{serviceName}</td>
                                            <td className="p-3">{userName}</td>
                                            <td className="p-3">{date}</td>
                                            <td className="p-3">{serviceArea}</td>
                                            <td className="p-3 text-right">${price}</td>
                                            <td className="p-3 text-right">
                                                <select
                                                    className={`px-3 py-1 font-semibold rounded-md ${status === 'pending'
                                                        ? 'dark:bg-violet-400 dark:text-gray-900'
                                                        : status === 'inprogress'
                                                            ? 'dark:bg-yellow-400 dark:text-gray-900'
                                                            : 'dark:bg-green-400 dark:text-gray-900'
                                                        }`}
                                                    value={status}
                                                    onChange={(e) => handleStatusChange(e, _id)}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="inprogress">In Progress</option>
                                                    <option value="completed">Completed</option>
                                                </select>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default MySchedules;