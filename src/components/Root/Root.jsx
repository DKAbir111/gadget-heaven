import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/cartContext";
import { useState } from "react";
import { WishContext } from "../Context/wishContext";

const Root = () => {
    const [addCart, setAddCart] = useState([])
    const [addWish, setAddWish] = useState([])
    return (
        <CartContext.Provider value={{ addCart, setAddCart }}>
            <WishContext.Provider value={{ addWish, setAddWish }}>
                <div>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </WishContext.Provider>
        </CartContext.Provider>
    );
};

export default Root;