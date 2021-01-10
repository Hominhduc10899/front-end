import React from 'react';
import {Link} from 'react-router-dom';
import data from './data'
import Filter from './Filter'

function Product (props) {
    return (
        <>
        <Filter></Filter>
        <div className="products">
        {
            data.products.map(product =>
                <div className="product_card">
                    <Link to={'/product/' + product._id}>
                    <img src={product.image}></img>
                    </Link>
                    <div class="product_box">
                        <h2 title={product.name}>{product.name}</h2>
                        <span>${product.price}</span>
                        <p>{product.description}</p>
                    </div>

                    <div className="row_btn">
                        <Link id="btn_direct" to="/">
                            Direct Link
                        </Link>
                        <Link id="btn_view" to={'/product/' + product._id}>
                            View
                        </Link>
                    </div>
                </div>
            )
        }
        </div>
        </>
    )  
}

export default Product;