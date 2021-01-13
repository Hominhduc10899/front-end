import React from 'react';
import {Link} from 'react-router-dom';
import Filter from './Filter'
import DataLoader from './data'
import NewDataLoader from './newdata'
import SaleDataLoader from './saledata'

function Product (props) {
    const products = DataLoader();
    const newproducts = NewDataLoader();
    const saleproducts = SaleDataLoader();
    return (
        <>
        <Filter></Filter>
        <h1>Your Products</h1>
        <div className="products">
        {
            products.map(product =>
                <div className="product_card">
                    <Link to={'/product/' + product._id}>
                    <img src={product.image}></img>
                    </Link>
                    <div class="product_box">
                        <h2 title={product.name}>{product.name}</h2>
                        <span>${product.currentPrice}</span>
                        <p>{product.description}</p>
                    </div>

                    <div className="row_btn">
                        <Link id="btn_direct" to="/">
                            Link
                        </Link>
                        <Link id="btn_view" to={'/product/' + product._id}>
                            View
                        </Link>
                    </div>
                </div>
            )
        }
        </div>

        <h1>New Products</h1>
        <div className="products">
        {
            newproducts.map(newproduct =>
                <div className="product_card">
                    <Link to={'/newproduct/' + newproduct._id}>
                    <img src={newproduct.image}></img>
                    </Link>
                    <div class="product_box">
                        <h2 title={newproduct.name}>{newproduct.name}</h2>
                        <span>${newproduct.currentPrice}</span>
                        <p>{newproduct.description}</p>
                    </div>

                    <div className="row_btn">
                        <Link id="btn_direct" to="/">
                            Link
                        </Link>
                        <Link id="btn_view" to={'/product/' + newproduct._id}>
                            View
                        </Link>
                    </div>
                </div>
            )
        }
        </div>

        <h1>Flash Sale</h1>
        <div className="products">
        {
            saleproducts.map(saleproduct =>
                <div className="product_card">
                    <Link to={'/product/' + saleproduct._id}>
                    <img src={saleproduct.image}></img>
                    </Link>
                    <div class="product_box">
                        <h2 title={saleproduct.name}>{saleproduct.name}</h2>
                        <span>${saleproduct.currentPrice}</span>
                        <p>{saleproduct.description}</p>
                    </div>

                    <div className="row_btn">
                        <Link id="btn_direct" to="/">
                            Link
                        </Link>
                        <Link id="btn_view" to={'/product/' + saleproduct._id}>
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