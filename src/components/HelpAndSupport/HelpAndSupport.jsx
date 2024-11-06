import { useLoaderData } from "react-router-dom"
import PageTitle from "../PageTitle/PageTitle";
import { useState } from "react";
import Help from "./Help";

export default function HelpAndSupport() {
    const data = useLoaderData();
    const uniqueCategory = [
        "HelpCenter",
        "ContactCustomerCare",
        "ShippingAndDelivery",
        "Order",
        "Payment",
        "ReturnsAndRefunds"
    ]
    const [active, setActive] = useState("HelpCenter")
    const handleClick = (category) => [
        setActive(category)
    ]

    return (
        <div className="relative flex flex-col items-center bg-base-300">
            <PageTitle title="Help" />
            <div className="hero  bg-[#9538E2] py-10 md:p-10 mb-14">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">Help & Support</h1>
                        <p className="py-6 md:w-3/4">
                            Get the assistance you need with ease. Whether you are looking for answers to common questions, need help with an order, or want to contact our support team, we have got you covered!
                        </p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-5 mb-20 p-2 container mx-auto">
                <div className="md:col-span-2 border h-auto p-2 rounded-xl shadow-xl bg-white md:h-[400px] md:flex">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full ">
                        {
                            uniqueCategory.map((category, index) => <button className={`btn  rounded-full ${category === active ? "bg-[#9538E2] text-white" : ""}`}
                                key={index} onClick={() => handleClick(category)}>{category}</button>)
                        }
                    </div>
                </div>
                <div className="md:col-span-9">
                    <div className="grid grid-cols-1 gap-5">
                        {
                            data[active] && data[active].map((data, index) => <Help data={data} key={index} />)
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}
