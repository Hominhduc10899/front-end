import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function HomeScreen (props) {
    return <ul className="products">
        {
            data.products.map(product =>
                <li>
                    <div className="product">
                      <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image}></img>
                      </Link>
                      <div class="product-name">
                          <Link to={'/product.html/' + product._id}>{product.name}</Link>
                      </div>
                      <div class="product-brand">{product.brand}</div>
                      <div class="product-price">${product.price}</div>
                      <div class="product-rating">{product.rating} Stars ({product.numReviews})</div>
                    </div>
                </li>
                )
        }
    </ul>
}

export default HomeScreen;