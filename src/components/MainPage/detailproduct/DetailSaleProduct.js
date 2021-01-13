import React, {useState} from 'react';
import SaleDataLoader from '../products/saledata'
import {Link} from 'react-router-dom'

function DetailNewProduct (props) {
    const [detailProduct, setDetailProduct] = useState([])
    console.log(props.match.params.id);
    const saleproduct = SaleDataLoader();
    const saleproducts = saleproduct.find(x=> x._id === props.match.params.id);
    return (
        <>
            <div className="detail">
                <img src={saleproducts.image} alt="product" ></img>
                <div className="box-detail">
                    <div className="row">
                        <h2>{saleproducts.name}</h2>
                        <h6>{saleproducts._id}</h6>
                    </div>
                    <p>Current price: ${saleproducts.currentPrice}</p>
                    <p>Lowest price: ${saleproducts.low}</p>
                    <p>{saleproducts.description}</p>
                    <p>Category: {saleproducts.category}</p>
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
                        saleproduct.map(product => {
                            return saleproducts.name
                        })
                    }
                </div>
            </div>
        </>
    )
        
}

export default DetailNewProduct;