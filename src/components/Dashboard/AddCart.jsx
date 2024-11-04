import { MdDeleteForever } from "react-icons/md";
export default function AddCart({ item }) {
    const { product_title, product_image, description, price } = item;
    return (
        <div className="flex p-5 rounded-lg bg-white border w-3/5  mx-auto items-center mt-5 justify-between">
            <div className="flex gap-5 items-center">
                <div className="w-36">
                    <img src={product_image} alt={product_title} className="object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{product_title}</h3>
                    <p className="opacity-70">{description}</p>
                    <p className="text-lg font-semibold">Price: ${price}</p>

                </div>
            </div>
            <div className="text-4xl hover:text-red-500 cursor-pointer">
                <MdDeleteForever />
            </div>

        </div>
    )
}


// {
//     "product_id": "20",
//     "product_title": "Oculus Quest 2",
//     "product_image": "https://i.ibb.co.com/wYdnb87/20.jpg",
//     "category": "Accessories",
//     "price": 299.99,
//     "description": "All-in-one virtual reality headset.",
//     "Specification": [
//         "64GB storage",
//         "Standalone operation",
//         "High-resolution display"
//     ],
//     "availability": true,
//     "rating": 4.7
// },