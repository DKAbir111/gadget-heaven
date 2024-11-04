import PropTypes from 'prop-types'
export default function Datum({ datum }) {
    const { product_title, price, product_image } = datum
    return (

        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10 h-64">
                <img
                    src={product_image}
                    alt="Products"
                    className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}$</p>
                <div className="card-actions">
                    <button className="btn btn-outline rounded-full border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:border-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>

    )
}

Datum.propTypes = {
    datum: PropTypes.object.isRequired,
}

// {
//     "product_id": "14",
//     "product_title": "MacBook Air (M1, 2020)",
//     "product_image": "https://i.ibb.co.com/t4zKS8S/3.jpg",
//     "category": "MacBooks",
//     "price": 999.99,
//     "description": "Lightweight laptop with M1 chip for superior performance.",
//     "Specification": [
//         "Apple M1 chip",
//         "8GB RAM",
//         "256GB SSD"
//     ],
//     "availability": true,
//     "rating": 4.7
// },