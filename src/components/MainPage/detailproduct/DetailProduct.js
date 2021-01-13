import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import DataLoader from '../products/data'

function DetailProduct (props) {
    const [detailProduct, setDetailProduct] = useState([])
    console.log(props.match.params.id);
    const products = DataLoader()
    const product = products.find(x=> x._id === props.match.params.id);
    return (
        <>
            <div className="detail">
                <img src={product.image} alt="product" ></img>
                <div className="box-detail">
                    <div className="row">
                        <h2>{product.name}</h2>
                        <h6>{product._id}</h6>
                    </div>
                    <p>Current price: ${product.currentPrice}</p>
                    <p>Lowest price: ${product.low}</p>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <div className="row_btn">
                        <Link id="btn_direct" to="/" className="cart">
                            Direct Link
                        </Link>
                        <Link to="/cart" className="cart">Add to cart</Link>   
                    </div>    
                </div>
            </div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.name
                        })
                    }
                </div>
            </div>
        </>
    )
        
}

export default DetailProduct;