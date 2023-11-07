import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar className="mb-auto" />
            <div className="flex-1 bg-white dark:bg-slate-900">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;