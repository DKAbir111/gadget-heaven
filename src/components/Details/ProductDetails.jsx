import { useLoaderData, useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { WishContext } from "../Context/wishContext";
import PageTitle from "../PageTitle/PageTitle";


export default function ProductDetails() {
    const { id } = useParams();
    const data = useLoaderData();
    const datum = data.find(datum => datum.product_id === id);


    const notifyWish = (message) => {
        message === "Item added to wishlist"
            ? toast.success(message, {
                position: "top-center",
            })
            : toast.error(message, {
                position: "top-center",
            });
    };
    //Add wish list functionality
    const wish = useContext(WishContext)
    const { addWish, setAddWish } = wish;
    const handleAddToWish = (datum) => {
        if (!addWish.map(item => item.product_id).includes(datum.product_id)) {
            setAddWish([...addWish, datum]);
            notifyWish('Item added to wishlist');
            return
        }
        notifyWish('Product already added to Wishlist');

    }

    const isWishList = addWish.map(item => item.product_id).includes(datum.product_id);


    //Add to cart functionality error
    const value = useContext(CartContext)
    const { handleAddToCart } = value


    const { product_image, product_title, price, availability, description, Specification, rating } = datum;

    const ratingStar = {
        size: 30,
        value: rating,
        edit: false
    };
    return (

        <div className="relative flex flex-col items-center md:mb-[550px] ">
            <PageTitle title="Product Details" />
            <div className="hero  bg-[#9538E2] pb-32 md:pb-56">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">Product Details</h1>
                        <p className="py-6 md:w-3/4">
                            Explore our exclusive range of cutting-edge gadgets! From innovative smart devices that elevate your daily tasks to stylish accessories that enhance your lifestyle, we have everything you need.</p>
                    </div>
                </div>
            </div>
            <div className='md:w-11/12 lg:w-3/5 p-5 border-2 backdrop-blur-lg bg-white rounded-lg md:h-auto border-base-200 bg-opacity-20 static md:absolute md:top-56 flex flex-col md:flex-row gap-5'>
                <div className="md:w-2/5 flex justify-center items-center bg-white rounded-lg shadow-sm" >
                    <img src={product_image} alt="" />

                </div>
                <div className="flex-1 bg-white p-5 rounded-lg flex flex-col justify-center gap-2 shadow-sm">
                    <h3 className="text-3xl font-semibold">{product_title}</h3>
                    <p className="text-xl">Price: ${price}</p>
                    <div>
                        <p className={`btn btn-sm  rounded - full ${availability ? "bg-[#309C081A] text-[#309C08] border-[#309C08]" : "bg-red-200 text-red-500 border-red-500"} `}>{availability ? 'In Stock' : 'Out of Stock'}</p>
                    </div>

                    <p className="opacity-70">{description}</p>
                    <p className="font-bold">Specification:</p>
                    <ol className="list-decimal pl-5">
                        {
                            Specification.map((spe, index) => (
                                <li key={index} className="mb-2">{spe}</li>
                            ))
                        }
                    </ol>
                    <p className="font-bold">Rating: </p>
                    <div className="flex items-center gap-3">
                        <ReactStars {...ratingStar} />
                        <p className="btn btn-sm rounded-full">{rating}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className={`btn bg-[#9538E2] rounded-full text-white ${!availability ? "btn-disabled" : ""}`} onClick={() => handleAddToCart(datum)}>Add To Card < IoCartOutline className="text-2xl" /></button>
                        <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle shadow-md border border-base-300 ${isWishList ? "btn-disabled" : ""}`} onClick={() => handleAddToWish(datum)}>
                            <CiHeart className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
