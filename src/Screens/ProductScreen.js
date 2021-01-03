import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen (props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product" ></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Starts ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Current Price: ${product.price}
                    </li>
                    <li>
                        Lowest Price: ${product.price}
                    </li>
                    <li>
                        Status: ${product.price}
                    </li>
                    <li>
                        <button className="button" >Direct Link</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;