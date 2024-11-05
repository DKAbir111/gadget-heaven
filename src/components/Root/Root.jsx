import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/cartContext";
import { useState } from "react";
import { WishContext } from "../Context/wishContext";
import { toast } from 'react-toastify';

const Root = () => {
    //Add to cart functionality error
    const [addCart, setAddCart] = useState([])
    const notify = (message) => {
        message === "Item added to cart"
            ? toast.success(message, {
                position: "top-center",
            })
            : toast.error(message, {
                position: "top-center",
            });
    };
    const handleAddToCard = (datum) => {
        if (!addCart.includes(datum)) {
            setAddCart([...addCart, datum]);
            notify('Item added to cart');
            return
        }
        notify('Product already added to cart');
    }
    //For wish list
    const [addWish, setAddWish] = useState([])
    return (
        <CartContext.Provider value={{ handleAddToCard, addCart }}>
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