export default function Footer() {
    return (
        <footer className="py-10 px-5 md:p-10 bg-white ">
            <div className="flex flex-col gap-3 justify-center items-center mb-5">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="opacity-70 text-center">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>

            <div className="footer md:flex md:justify-evenly">
                <nav>
                    <h6 className="footer-title">Services </h6>
                    <a className="link link-hover">  Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    )
}
