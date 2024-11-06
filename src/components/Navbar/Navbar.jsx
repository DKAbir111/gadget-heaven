import { Link, NavLink, useLocation } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { WishContext } from "../Context/wishContext";


export default function Navbar() {
    const location = useLocation();
    const value = useContext(CartContext)
    const { addCart } = value;
    const wish = useContext(WishContext)
    const { addWish } = wish;
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/help'>Help and Support</NavLink></li>
    </>
    return (
        <div className={location.pathname === '/' ? 'bg-[#9538E2]' : 'bg-base-100'}>
            <div className="navbar container md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className={`${location.pathname === '/' ? "text-white" : "text-black"} btn btn-ghost text-xl`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">

                                <IoCartOutline className="text-2xl" />
                                <span className="badge badge-sm indicator-item">{addCart.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{addCart.length} Items</span>
                                <span className="text-info">
                                    Subtotal: $
                                    {addCart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                                </span>
                                <div className="card-actions">
                                    <Link to='/dashboard' className="btn btn-block text-white bg-[#9538E2]">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">

                            <CiHeart className="text-2xl" />
                            <span className="badge badge-sm indicator-item">{addWish.length}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
