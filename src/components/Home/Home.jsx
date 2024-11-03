import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

export default function Home() {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner />
        </div>
    )
}
