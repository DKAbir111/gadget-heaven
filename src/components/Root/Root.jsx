import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/cartContext";
import { useState } from "react";

const Root = () => {
    const [addCart, setAddCart] = useState([])
    return (
        <CartContext.Provider value={{ addCart, setAddCart }}>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>

        </CartContext.Provider>
    );
};

export default Root;