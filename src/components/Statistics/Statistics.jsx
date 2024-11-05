import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export default function Statistics() {
    const data = useLoaderData();

    const chartData = data.map(product => ({
        product_title: product.product_title,
        price: product.price,
        rating: product.rating,
    }));

    return (
        <div className="relative flex flex-col items-center bg-base-300">
            <PageTitle title="Statistics" />
            <div className="hero  bg-[#9538E2] py-10 md:p-10">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">Statistics</h1>
                        <p className="py-6 md:w-3/4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={500} className="container mx-auto p-2 bg-white my-20 rounded-lg shadow-lg">
                <ComposedChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#ff7300"
                        dot={false}
                    />

                    <Bar
                        dataKey="price"
                        barSize={20}
                        fill="#9538E2"
                    />
                    {/* <Scatter dataKey="rating" fill="red" /> */}
                    <Line
                        type="monotone"
                        dataKey="rating"
                        stroke="#8884d8"
                        dot={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
