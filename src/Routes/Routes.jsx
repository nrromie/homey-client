import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import MyServices from "../pages/MyServices/MyServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <div>comming soon</div>,
            },
            {
                path: "/addservice",
                element: <AddService />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/myservices",
                element: <MyServices />
            },
            {
                path: "services/details/:_id",
                element: <ServiceDetails />
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