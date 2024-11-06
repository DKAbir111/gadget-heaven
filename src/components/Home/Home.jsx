import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Datum from "./Datum";
import { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";


export default function Home() {
    //All data
    const initialData = useLoaderData();
    const [data, setData] = useState(initialData);

    console.log(initialData);
    //find the unique category using new Set
    const uniqueCategory = [...new Set(initialData.map(item => item.category))]


    //Keep track of active category
    const [active, setActive] = useState('All Product')

    //handle click event to filter data based on category
    const handleClick = (category) => {
        setActive(category);
        if (category === 'All Product') {
            setData(initialData);
            return;
        }
        if (uniqueCategory.find(item => item === category)) {
            const filteredData = initialData.filter(datum => datum.category === category);
            setData(filteredData);
            return;
        }

        setData([]);
    }
    return (
        <div className="bg-[#09080F0D] pb-20">
            <PageTitle title={"Home"} />
            <Banner />
            <div className="container md:mx-auto p-2" id="main">
                <h2 className="text-3xl font-semibold text-center mb-10">Explore Cutting-Edge Gadgets</h2>

                <div className="grid grid-cols-1 md:grid-cols-11 gap-5">

                    <div className="md:col-span-2 border h-auto p-2 rounded-xl shadow-xl bg-white md:h-[450px] md:flex">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full ">
                            <button className={`btn  rounded-full  ${active === 'All Product' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D]'}`}
                                onClick={() => handleClick('All Product')}>All Product</button>
                            {
                                uniqueCategory.map((category, index) => <button className={`btn  rounded-full  ${active === category ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D]'}`}
                                    key={index} onClick={() => handleClick(category)}>{category}</button>)
                            }
                            <button className={`btn  rounded-full  ${active === 'Smart Watch' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D]'}`}
                                onClick={() => handleClick('Smart Watch')}>Smart Watch</button>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                data.length > 0 ? (
                                    data.map(datum => <Datum datum={datum} count={data.length} key={datum.product_id} />)
                                ) : (
                                    <div className="flex flex-col gap-5 items-center justify-center col-span-full">

                                        <h3 className="text-2xl font-semibold">No Products Available</h3>
                                        <p className="text-center">It seems there are no products in this category. Please check back later!</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
