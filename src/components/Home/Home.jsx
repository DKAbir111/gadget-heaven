import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Datum from "./Datum";
import { useState } from "react";

export default function Home() {
    //All data
    const initialData = useLoaderData();
    const [data, setData] = useState(initialData);
    console.log(data);

    //find the unique category using new Set
    const uniqueCategory = [...new Set(initialData.map(item => item.category))]
    console.log(uniqueCategory);

    //Keep track of active category
    const [active, setActive] = useState('All Product')

    //handle click event to filter data based on category
    const handleClick = (category) => {
        setActive(category);
        if (category === 'All Product') {
            setData(initialData);
            return;
        }
        const filteredData = initialData.filter(datum => datum.category === category);
        setData(filteredData);
        console.log(typeof category)
    }
    return (
        <div className="bg-[#09080F0D]">
            <Banner />
            <div className="container md:mx-auto p-2">
                <h2 className="text-3xl font-semibold text-center mb-10">Explore Cutting-Edge Gadgets</h2>

                <div className="grid grid-cols-1 md:grid-cols-11 gap-5">

                    <div className="md:col-span-2 border h-auto p-2 rounded-xl shadow-xl bg-white">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full">
                            <button className={`btn  rounded-full  ${active === 'All Product' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D]'}`}
                                onClick={() => handleClick('All Product')}>All Product</button>
                            {
                                uniqueCategory.map((category, index) => <button className={`btn  rounded-full  ${active === category ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D]'}`}
                                    key={index} onClick={() => handleClick(category)}>{category}</button>)
                            }
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                data.map(datum => <Datum datum={datum} key={datum.product_id} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
