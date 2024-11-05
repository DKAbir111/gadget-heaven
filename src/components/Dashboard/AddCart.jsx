import PropTypes from 'prop-types'
import { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from '../Context/cartContext';
export default function AddCart({ item }) {
    const { product_title, product_image, description, price } = item;
    const value = useContext(CartContext);
    const { handleDelete } = value;
    return (
        <div className="flex px-2 py-5 md:p-5 rounded-lg bg-white border lg:w-3/5  mx-auto items-center mt-5 justify-between">
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
            <div className="text-4xl hover:text-red-500 cursor-pointer" onClick={() => handleDelete(item)}>
                <MdDeleteForever />
            </div>

        </div>
    )
}


AddCart.propTypes = {
    item: PropTypes.object.isRequired,
}