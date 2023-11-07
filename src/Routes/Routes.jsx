import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import MyServices from "../pages/MyServices/MyServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Booking from "../pages/Booking/Booking";
import MySchedules from "../pages/MySchedules/MySchedules";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addservice",
                element: <PrivateRoutes><AddService /></PrivateRoutes>
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/myservices",
                element: <PrivateRoutes><MyServices /></PrivateRoutes>
            },
            {
                path: "services/details/:_id",
                element: <ServiceDetails />
            },
            {
                path: "/booking/:_id",
                element: <Booking />
            },
            {
                path: "/schedules",
                element: <PrivateRoutes><MySchedules /></PrivateRoutes>
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            }
        ],
    },
]);

export default router