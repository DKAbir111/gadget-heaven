import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    // let location = useLocation();
    // console.log(location.pathname);
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Root; 1