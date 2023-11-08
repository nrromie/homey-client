import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet";

const MySchedules = () => {
    const { userData, user } = useContext(AuthContext);
    console.log(userData, user)

    const [loading, setLoading] = useState(true);
    const [AllBookings, setAllBookings] = useState({ bookings: [], myWork: [] });

    useEffect(() => {
        fetch(`https://homey-server.vercel.app/myschedules/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <Loading />;
    }

    const { bookings, myWork } = AllBookings;
    // const { email, photo, serviceName, serviceArea, price, description } = service;
    // const { displayName, photoURL } = provider;

    return (
        <div className="dark:bg-slate-900">
            <Helmet><title>My Schedule</title></Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi">My Bookings</h2>
                {bookings.length < 1 ? (
                    <div>There is no data</div>
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
                                {bookings.map(work => {
                                    return <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Microsoft Corporation</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$15,792</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
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
                    <div>There is no data</div>
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
                                {myWork.map(work => {
                                    return <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Microsoft Corporation</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$15,792</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
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