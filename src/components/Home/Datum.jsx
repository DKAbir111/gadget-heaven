import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Datum({ datum }) {
    const { product_id, product_title, price, product_image } = datum;

    return (

        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10 h-64">
                <img
                    src={product_image}
                    alt={`Image of ${product_title}`}
                    className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`}><button className="btn btn-outline rounded-full border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:border-[#9538E2]">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
}

Datum.propTypes = {
    datum: PropTypes.object.isRequired,
};
