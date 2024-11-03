import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Datum from "./Datum";

export default function Home() {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner />
            <div className="container md:mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10">Explore Cutting-Edge Gadgets</h2>

                <div className="grid grid-cols-11 gap-5">

                    <div className="col-span-2 border h-screen">

                    </div>
                    <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-5">
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
