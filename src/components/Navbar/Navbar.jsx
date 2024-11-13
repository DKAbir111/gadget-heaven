import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { CartContext } from "../Context/cartContext";
import { WishContext } from "../Context/wishContext";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/CreateContext";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const location = useLocation();
    const value = useContext(CartContext)
    const { addCart } = value;
    const wish = useContext(WishContext)
    const { addWish } = wish;
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        <li><NavLink to='/help'>Help and Support</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Successfully logged out")
            })
            .catch(error => {
                console.error("ERROR", error.message)
            })
        navigate('/auth/login')
    }
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
                    <Link to='/' className={`${location.pathname === '/' ? "text-white" : "text-black"} btn btn-ghost text-xl`}>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">
                                <p className="flex items-center gap-1 text-xs"> {(user?.displayName?.split(" ")[0] || user?.displayName)}`s Account <FaAngleDown /></p>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-56 shadow">
                                <div className="card-body">

                                    <div className="dropdown dropdown-end">
                                        <div className="flex items-center cursor-pointer " onClick={() => setShow(!show)}>
                                            <div className="btn rounded-full btn-ghost btn-circle m-1">
                                                <div className="indicator">

                                                    <IoCartOutline className="text-2xl" />
                                                    <span className="badge badge-sm indicator-item">{addCart.length}</span>
                                                </div>
                                            </div>


                                            <p>Add to Cart</p>
                                        </div>
                                        {
                                            show && <ul className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow mr-36">
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
                                            </ul>
                                        }
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                            <div className="indicator">

                                                <CiHeart className="text-2xl" />
                                                <span className="badge badge-sm indicator-item">{addWish.length}</span>
                                            </div>
                                        </div>
                                        <p>Wish List</p>
                                    </div>
                                    <div className="btn border-2  border-[#9538e2] btn-outline rounded-full hover:bg-[#9538e2] hover:border-[#9538e2] flex items-center justify-center">

                                        <div className="flex items-center gap-1" onClick={handleLogOut}>
                                            <FaRegUserCircle className="text-xl" />
                                            <p>Log Out</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {!user &&
                        <Link to='/auth/login' className="flex items-center gap-1 btn  border-[#9538e2] btn-outline rounded-full hover:bg-[#9538e2] hover:border-[#9538e2]">
                            <FaRegUserCircle className="text-xl" />

                            <p>Login</p>

                        </Link>
                    }
                </div>
            </div>

        </div >
    )
}
