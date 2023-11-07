import { useContext } from "react";
import { AuthContex } from '../Providers/AuthProvider'
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;