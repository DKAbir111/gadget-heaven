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
    const handleAddToCart = (datum) => {
        if (!addCart.map(item => item.product_id).includes(datum.product_id)) {
            setAddCart([...addCart, datum]);
            notify('Item added to cart');
            return;
        }
        notify('Product already added to cart');
    }

    //Handle Delete
    const handleDelete = (item) => {
        setAddCart(addCart.filter(product => product !== item))
    }
    //Handle WishDelete
    const handleWishDelete = (item) => {
        setAddWish(addWish.filter(product => product !== item))
    }
    //For wish list
    const [addWish, setAddWish] = useState([])

    const handleSort = () => {
        const sortedProducts = [...addCart].sort((a, b) => b.price - a.price);  // Descending order
        setAddCart(sortedProducts);
        console.log("Sorted by price descending");
    };


    return (
        <CartContext.Provider value={{ handleAddToCart, addCart, handleDelete, handleSort, setAddCart, notify }}>
            <WishContext.Provider value={{ addWish, setAddWish, handleWishDelete }}>
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