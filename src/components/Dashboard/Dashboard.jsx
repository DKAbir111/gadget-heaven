import { useContext, useState } from "react"
import { CartContext } from "../Context/cartContext"
import AddCart from "./AddCart";
import { ImSortAmountDesc } from "react-icons/im";

export default function Dashboard() {
    const value = useContext(CartContext)
    const { addCart } = value;
    const [active, setActive] = useState("Cart")
    const handleClick = (object) => {
        if (object === "Cart") {
            setActive("Cart");
        }
        else {
            setActive("Wishlist");
        }
    }
    return (
        <div className="relative flex flex-col items-center">
            <div className="hero  bg-[#9538E2] p-10">
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
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{active}</h3>
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">Total Cost: {100}</h3>
                        <button className="btn btn-outline text-[#9538E2] rounded-full hover:bg-[#9538E2] hover:border-[#9538E2]">Sort by Price<ImSortAmountDesc /></button>
                        <button className="btn rounded-full bg-gradient-to-r from-[#9538E2] to-[#7114f3] border-[#9538E2] px-7 text-white">Purchase</button>
                    </div>
                </div>
                {
                    active === "Cart" ?
                        addCart.map(item => <AddCart item={item} key={item.product_id} />) :
                        <h1>Hello from wish list</h1>
                }


            </div>
        </div>

    )
}
