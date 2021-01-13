import React, {useState} from 'react';
import NewDataLoader from '../products/newdata'
import {Link} from 'react-router-dom'

function DetailNewProduct (props) {
    const [detailProduct, setDetailProduct] = useState([])
    console.log(props.match.params.id);
    const newproduct = NewDataLoader();
    const newproducts = newproduct.find(x=> x._id === props.match.params.id);
    return (
        <>
            <div className="detail">
                <img src={newproducts.image} alt="product" ></img>
                <div className="box-detail">
                    <div className="row">
                        <h2>{newproducts.name}</h2>
                        <h6>{newproducts._id}</h6>
                    </div>
                    <p>Current price: ${newproducts.currentPrice}</p>
                    <p>Lowest price: ${newproducts.currentPrice}</p>
                    <p>{newproducts.description}</p>
                    <p>Category: {newproducts.category}</p>
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
                        newproduct.map(product => {
                            return newproducts.name
                        })
                    }
                </div>
            </div>
        </>
    )
        
}

export default DetailNewProduct;