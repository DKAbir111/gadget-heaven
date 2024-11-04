import { useContext } from "react"
import { CartContext } from "../Context/cartContext"
import AddCart from "./AddCart";

export default function Dashboard() {
    const value = useContext(CartContext)
    const { addCart } = value;
    return (
        <div className="relative flex flex-col items-center">
            <div className="hero  bg-[#9538E2] p-10">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="py-6 md:w-3/4">
                            Discover our curated selection of state-of-the-art gadgets! From smart devices that transform your daily routine to elegant accessories that complement your lifestyle, we have all you need.
                        </p>
                        <div>
                            <button className="btn bg-white text-[#9538E2] rounded-full font-bold">Get Started</button>
                            <button className="btn bg-white text-[#9538E2] rounded-full font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base-300 w-full p-10">
                {
                    addCart.map(item => <AddCart item={item} key={item.product_id} />)
                }
            </div>
        </div>

    )
}
