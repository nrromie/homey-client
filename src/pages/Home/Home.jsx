import Aboutus from "../../components/Aboutus/Aboutus";
import Banner from "../../components/Banner/Banner";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner />
            <FeaturedServices />
            <Aboutus />
        </div>
    );
};

export default Home;