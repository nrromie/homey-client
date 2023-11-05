import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        ],
    },
]);

export default router