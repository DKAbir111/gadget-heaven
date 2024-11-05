import { useContext, useState } from "react"
import { CartContext } from "../Context/cartContext"
import AddCart from "./AddCart";
import { ImSortAmountDesc } from "react-icons/im";
import { WishContext } from "../Context/wishContext";
import AddWish from "./AddWish";
import modalImg from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

export default function Dashboard() {
    const value = useContext(CartContext)
    const { addCart, handleSort, setAddCart, notify } = value;

    const wish = useContext(WishContext)
    const { addWish } = wish;

    const [active, setActive] = useState("Cart")
    const handleClick = (object) => {
        if (object === "Cart") {
            setActive("Cart");
        }
        else {
            setActive("Wishlist");
        }
    }

    const handlePurchase = () => {
        if (addCart.length === 0) {
            notify("No items in your cart to purchase.");

            return;
        }
        document.getElementById('my_modal_1').showModal();

    }

    //Close button after purchase
    const navigate = useNavigate();
    const handleClose = () => {
        setAddCart([]);
        navigate('/')
    }
    return (
        <div className="relative flex flex-col items-center">
            <PageTitle title="Dashboard" />
            <div className="hero  bg-[#9538E2] py-10 md:p-10">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="py-6 md:w-3/4">
                            Discover our curated selection of state-of-the-art gadgets! From smart devices that transform your daily routine to elegant accessories that complement your lifestyle, we have all you need.
                        </p>
                        <div className="flex gap-3">
                            <button className={`btn  rounded-full font-bold px-12 ${active === "Cart" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`} onClick={() => handleClick("Cart")}>Cart</button>
                            <button className={`btn  rounded-full font-bold px-10 ${active === "Wishlist" ? "bg-white text-[#9538E2]" : "btn-outline text-white"}`} onClick={() => handleClick("Wishlist")}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base-300 w-full md:p-10 p-2">
                <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
                    <h3 className="text-xl font-bold">{active}</h3>
                    <div className={`flex items-center gap-3 ${active === "Wishlist" ? "hidden" : ""}`}>
                        <h3 className="text-xl font-bold">Total Cost: {addCart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
                        <div className="flex flex-col md:flex-row gap-3">
                            <button className="btn btn-outline text-[#9538E2] rounded-full hover:bg-[#9538E2] hover:border-[#9538E2]" onClick={handleSort}>Sort by Price<ImSortAmountDesc /></button>
                            <button className="btn rounded-full bg-gradient-to-r from-[#9538E2] to-[#7114f3] border-[#9538E2] px-7 text-white" onClick={handlePurchase}>Purchase</button>

                        </div>
                    </div>
                </div>
                {
                    active === "Cart" ?
                        addCart.map(item => <AddCart item={item} key={item.product_id} />) :
                        addWish.map(item => <AddWish item={item} key={item.product_id} />)
                }


            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                    <div className="mb-5">
                        <img src={modalImg} alt="Payment Success" />
                    </div>

                    <h3 className="font-bold text-lg text-green-600">Payment Successful</h3>
                    <div className="divider"></div>
                    <p className="text-center text-sm text-gray-600">
                        Thank you for your purchase! Your transaction has been successfully processed.
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        <strong>Total Amount:</strong> ${addCart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-[#9538E2] text-white px-10" onClick={handleClose}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>

    )
}
