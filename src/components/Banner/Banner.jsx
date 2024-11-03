import banner from '../../assets/banner.jpg'
export default function Banner() {
    return (
        <div className="relative flex flex-col items-center mb-72">
            <div className="hero min-h-screen bg-[#9538E2] lg:pb-56">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 md:w-3/4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white text-[#9538E2] rounded-full font-bold">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-11/12 lg:w-3/5 p-5 border-2 backdrop-blur-lg bg-white rounded-lg h-72 md:h-[500px] border-white bg-opacity-20 absolute -bottom-48'>
                <img src={banner} alt="" className='rounded-lg h-full w-full object-cover' />
            </div>
        </div>
    )
}
